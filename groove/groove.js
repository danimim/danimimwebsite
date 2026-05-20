/**
 * Groove Crypto Club — second page (/groove/)
 * Trimmed copy of the main Windows95Desktop windowing logic. Content is read
 * from window.SITE_DATA.groove (defined in /assets/js/data.js).
 */

console.log('Loading groove.js...');

class GrooveDesktop {
    constructor() {
        this.zIndexCounter = 100;
        this.activeWindow = null;
        this.isDragging = false;
        this.draggedWindow = null;
        this.dragOffset = { x: 0, y: 0 };
        this.isStartMenuOpen = false;

        this.init();
    }

    init() {
        this.populateContent();
        this.setupEventListeners();
        this.positionWindows();
        this.setClockInterval();
        this.openInitialWindows();
    }

    populateContent() {
        const groove = (window.SITE_DATA && window.SITE_DATA.groove) || {};
        this.populateVideos(groove);
        this.populateNewsletter(groove);
        this.populateVinyl(groove);
        this.populatePlaylist(groove);
    }

    populateVideos(groove) {
        const container = document.getElementById('videos-content');
        const grid = document.createElement('div');
        grid.className = 'video-grid';

        (groove.videos || []).forEach(video => {
            const card = document.createElement('a');
            card.className = 'video-card';
            card.href = video.url || '#';
            card.target = '_blank';
            card.rel = 'noopener';
            card.innerHTML = `
                <div class="video-thumb">
                    <img src="${video.thumbnail || ''}" alt="${video.title || ''}" onerror="this.remove()">
                    <span class="video-play">&#9654;</span>
                </div>
                <div class="video-title">${video.title || ''}</div>
                <div class="video-desc">${video.description || ''}</div>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);

        if (groove.videosNote) {
            const note = document.createElement('p');
            note.className = 'lang-note';
            note.innerHTML = groove.videosNote;
            container.appendChild(note);
        }
    }

    populateNewsletter(groove) {
        const container = document.getElementById('newsletter-content');
        const nl = groove.newsletter || {};

        const intro = document.createElement('p');
        intro.className = 'nl-intro';
        intro.textContent = nl.intro || '';
        container.appendChild(intro);

        const subscribe = document.createElement('div');
        subscribe.className = 'nl-subscribe';
        const subscribeBtn = document.createElement('a');
        subscribeBtn.className = 'btn';
        subscribeBtn.href = nl.subscribeUrl || '#';
        subscribeBtn.target = '_blank';
        subscribeBtn.rel = 'noopener';
        subscribeBtn.textContent = 'Subscribe';
        subscribe.appendChild(subscribeBtn);
        container.appendChild(subscribe);

        const issuesTitle = document.createElement('div');
        issuesTitle.className = 'nl-section-title';
        issuesTitle.textContent = 'Past issues';
        container.appendChild(issuesTitle);

        const list = document.createElement('ul');
        list.className = 'talks-list';
        (nl.issues || []).forEach(issue => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${issue.url || '#'}" target="_blank" rel="noopener">${issue.title || ''}</a>
                <div class="nl-date">${issue.date || ''}</div>
            `;
            list.appendChild(li);
        });
        container.appendChild(list);
    }

    populateVinyl(groove) {
        const container = document.getElementById('vinyl-content');
        const list = document.createElement('ul');
        list.className = 'vinyl-list';

        (groove.vinyl || []).forEach(record => {
            const li = document.createElement('li');
            const meta = [record.artist, record.year].filter(Boolean).join(' &middot; ');
            li.innerHTML = `
                <span class="vinyl-disc">&#128191;</span>
                <span class="vinyl-info">
                    <span class="vinyl-album">${record.album || ''}</span>
                    <span class="vinyl-artist">${meta}</span>
                    ${record.note ? `<span class="vinyl-note">${record.note}</span>` : ''}
                </span>
            `;
            list.appendChild(li);
        });

        container.appendChild(list);
    }

    populatePlaylist(groove) {
        const container = document.getElementById('playlist-content');

        const intro = document.createElement('p');
        intro.className = 'playlist-intro';
        intro.textContent = 'Hit play and vibe while you browse.';
        container.appendChild(intro);

        if (groove.playlistEmbed) {
            const iframe = document.createElement('iframe');
            iframe.className = 'spotify-embed';
            iframe.src = groove.playlistEmbed;
            iframe.width = '100%';
            iframe.height = '380';
            iframe.loading = 'lazy';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            container.appendChild(iframe);
        }
    }

    setupEventListeners() {
        // Desktop icons
        document.querySelectorAll('.desktop-icon').forEach(icon => {
            icon.addEventListener('click', () => this.openWindow(icon.dataset.window));
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openWindow(icon.dataset.window);
                }
            });
        });

        // Window controls
        document.querySelectorAll('.window-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const win = btn.closest('.window');
                if (btn.classList.contains('close')) {
                    this.closeWindow(win.id);
                } else if (btn.classList.contains('minimize')) {
                    this.minimizeWindow(win.id);
                }
            });
        });

        // Window dragging
        document.querySelectorAll('.window-header').forEach(header => {
            header.addEventListener('pointerdown', (e) => {
                this.startDrag(header.closest('.window'), e);
            });
        });

        // Window focus
        document.querySelectorAll('.window').forEach(win => {
            win.addEventListener('pointerdown', () => this.focusWindow(win.id));
        });

        document.addEventListener('pointermove', (e) => {
            if (this.isDragging) this.handleDrag(e);
        });
        document.addEventListener('pointerup', () => { this.isDragging = false; });

        // Start button and menu
        const startBtn = document.getElementById('start-btn');
        const startMenu = document.getElementById('start-menu');

        startBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleStartMenu();
        });

        document.querySelectorAll('.start-menu-item[data-window]').forEach(item => {
            item.addEventListener('click', () => {
                this.openWindow(item.dataset.window);
                this.closeStartMenu();
            });
        });

        document.addEventListener('click', (e) => {
            if (!startBtn.contains(e.target) && !startMenu.contains(e.target)) {
                this.closeStartMenu();
            }
        });

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.activeWindow) this.closeWindow(this.activeWindow);
                this.closeStartMenu();
            }
        });
    }

    openWindow(windowId) {
        const win = document.getElementById(windowId);
        if (!win) return;
        win.classList.add('active');
        win.classList.remove('minimized');
        this.focusWindow(windowId);
    }

    closeWindow(windowId) {
        const win = document.getElementById(windowId);
        if (!win) return;
        win.classList.remove('active');
        if (this.activeWindow === windowId) this.activeWindow = null;
    }

    minimizeWindow(windowId) {
        const win = document.getElementById(windowId);
        if (!win) return;
        win.classList.add('minimized');
        win.classList.remove('active');
        if (this.activeWindow === windowId) this.activeWindow = null;
    }

    focusWindow(windowId) {
        this.activeWindow = windowId;
        const win = document.getElementById(windowId);
        if (!win) return;
        this.zIndexCounter++;
        win.style.zIndex = this.zIndexCounter;
    }

    startDrag(win, e) {
        if (!win) return;
        this.isDragging = true;
        this.draggedWindow = win;

        const rect = win.getBoundingClientRect();
        this.dragOffset.x = e.clientX - rect.left;
        this.dragOffset.y = e.clientY - rect.top;

        this.focusWindow(win.id);
        e.preventDefault();
    }

    handleDrag(e) {
        if (!this.isDragging || !this.draggedWindow) return;

        const x = e.clientX - this.dragOffset.x;
        const y = e.clientY - this.dragOffset.y;

        const maxX = window.innerWidth - this.draggedWindow.offsetWidth;
        const maxY = window.innerHeight - this.draggedWindow.offsetHeight - 32;

        this.draggedWindow.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        this.draggedWindow.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
    }

    positionWindows() {
        const isMobile = window.innerWidth <= 768;
        document.querySelectorAll('.window').forEach((win, index) => {
            if (isMobile) {
                win.style.left = '8px';
                win.style.top = (8 + index * 6) + 'px';
            } else {
                win.style.left = (60 + index * 48) + 'px';
                win.style.top = (32 + index * 32) + 'px';
            }
        });
    }

    openInitialWindows() {
        // On phones, opening four cascaded windows is messy — show just one.
        if (window.innerWidth <= 768) {
            this.openWindow('videos');
            return;
        }
        // Open last-to-first so "Videos" ends up focused on top.
        ['playlist', 'vinyl', 'newsletter', 'videos'].forEach(id => this.openWindow(id));
    }

    toggleStartMenu() {
        this.isStartMenuOpen ? this.closeStartMenu() : this.openStartMenu();
    }

    openStartMenu() {
        this.isStartMenuOpen = true;
        document.getElementById('start-menu').classList.add('active');
        document.getElementById('start-btn').classList.add('active');
    }

    closeStartMenu() {
        this.isStartMenuOpen = false;
        document.getElementById('start-menu').classList.remove('active');
        document.getElementById('start-btn').classList.remove('active');
    }

    updateClock() {
        const clock = document.getElementById('clock');
        if (!clock) return;
        clock.textContent = new Date().toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    setClockInterval() {
        this.updateClock();
        setInterval(() => this.updateClock(), 60000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GrooveDesktop();
});

console.log('✅ groove.js loaded!');
