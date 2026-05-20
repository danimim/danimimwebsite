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

        this.playerTracks = [];
        this.playerIndex = 0;
        this.playerState = 'stopped';

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
        this.populateDonate(groove);
        this.populateAbout(groove);
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
        const playlist = groove.playlist || {};
        this.playerTracks = playlist.tracks || [];
        this.playerIndex = 0;
        this.playerState = 'stopped';

        const player = document.createElement('div');
        player.className = 'player';
        player.innerHTML = `
            <div class="player-display">
                <div class="player-lcd">
                    <span class="player-track-num" id="player-num">--</span>
                    <span class="player-track-title" id="player-title">No tracks</span>
                </div>
                <div class="player-status" id="player-status">&#9632; STOPPED</div>
            </div>
            <div class="player-controls">
                <button class="player-btn" data-action="prev" aria-label="Previous">|&#9668;</button>
                <button class="player-btn" data-action="play" aria-label="Play">&#9658;</button>
                <button class="player-btn" data-action="pause" aria-label="Pause">||</button>
                <button class="player-btn" data-action="stop" aria-label="Stop">&#9632;</button>
                <button class="player-btn" data-action="next" aria-label="Next">&#9658;|</button>
            </div>
            <ul class="player-playlist" id="player-playlist"></ul>
            <p class="player-note">${playlist.note || ''}</p>
        `;
        container.appendChild(player);

        const list = player.querySelector('#player-playlist');
        this.playerTracks.forEach((track, i) => {
            const li = document.createElement('li');
            li.className = 'player-track';
            li.dataset.index = i;
            const num = String(i + 1).padStart(2, '0');
            li.textContent = `${num}. ${track.title || ''}${track.artist ? ' — ' + track.artist : ''}`;
            li.addEventListener('click', () => this.playerSelect(i));
            list.appendChild(li);
        });

        player.querySelectorAll('.player-btn').forEach(btn => {
            btn.addEventListener('click', () => this.playerControl(btn.dataset.action));
        });

        this.playerRender();
    }

    playerSelect(index) {
        this.playerIndex = index;
        this.playerState = 'playing';
        this.playerRender();
    }

    playerControl(action) {
        if (!this.playerTracks.length) return;
        const last = this.playerTracks.length - 1;
        switch (action) {
            case 'play':
                this.playerState = 'playing';
                break;
            case 'pause':
                if (this.playerState === 'playing') this.playerState = 'paused';
                break;
            case 'stop':
                this.playerState = 'stopped';
                this.playerIndex = 0;
                break;
            case 'prev':
                this.playerIndex = this.playerIndex === 0 ? last : this.playerIndex - 1;
                this.playerState = 'playing';
                break;
            case 'next':
                this.playerIndex = this.playerIndex === last ? 0 : this.playerIndex + 1;
                this.playerState = 'playing';
                break;
        }
        this.playerRender();
    }

    playerRender() {
        const numEl = document.getElementById('player-num');
        const titleEl = document.getElementById('player-title');
        const statusEl = document.getElementById('player-status');
        if (!numEl || !titleEl || !statusEl) return;

        const track = this.playerTracks[this.playerIndex];
        if (track) {
            numEl.textContent = String(this.playerIndex + 1).padStart(2, '0');
            titleEl.textContent = `${track.title || ''}${track.artist ? ' — ' + track.artist : ''}`;
        } else {
            numEl.textContent = '--';
            titleEl.textContent = 'No tracks';
        }

        const labels = {
            stopped: '&#9632; STOPPED',
            playing: '&#9658; PLAYING',
            paused: '|| PAUSED'
        };
        statusEl.innerHTML = labels[this.playerState] || labels.stopped;

        document.querySelectorAll('.player-track').forEach(el => {
            el.classList.toggle('selected', Number(el.dataset.index) === this.playerIndex);
        });

        const playBtn = document.querySelector('.player-btn[data-action="play"]');
        const pauseBtn = document.querySelector('.player-btn[data-action="pause"]');
        if (playBtn) playBtn.classList.toggle('pressed', this.playerState === 'playing');
        if (pauseBtn) pauseBtn.classList.toggle('pressed', this.playerState === 'paused');
    }

    populateDonate(groove) {
        const container = document.getElementById('donate-content');
        const donate = groove.donate || {};

        const intro = document.createElement('p');
        intro.className = 'donate-intro';
        intro.textContent = donate.intro || '';
        container.appendChild(intro);

        const item = document.createElement('div');
        item.className = 'wallet-item';
        item.innerHTML = `
            <div class="wallet-chain">Donation address</div>
            ${donate.note ? `<div class="wallet-note">${donate.note}</div>` : ''}
            <div class="wallet-row">
                <code class="wallet-address">${donate.address || ''}</code>
                <button type="button" class="btn wallet-copy">Copy</button>
            </div>
        `;
        const copyBtn = item.querySelector('.wallet-copy');
        copyBtn.addEventListener('click', () => this.copyToClipboard(donate.address || '', copyBtn));
        container.appendChild(item);
    }

    populateAbout(groove) {
        const container = document.getElementById('about-content');
        container.innerHTML = groove.about || '';
    }

    copyToClipboard(text, button) {
        const done = () => {
            const original = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => { button.textContent = original; }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done).catch(() => {});
        }
    }

    setupEventListeners() {
        // Desktop icons (grid + side icons)
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

        // Request form
        const requestForm = document.getElementById('request-form');
        if (requestForm) {
            requestForm.addEventListener('submit', (e) => this.handleRequestSubmit(e));
        }

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.activeWindow) this.closeWindow(this.activeWindow);
                this.closeStartMenu();
            }
        });
    }

    handleRequestSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const status = document.getElementById('request-status');
        const endpoint = window.SITE_DATA && window.SITE_DATA.FORMSPREE_ENDPOINT;
        const formData = new FormData(form);

        if (!endpoint) {
            const data = Object.fromEntries(formData);
            const subject = encodeURIComponent('Groove Crypto Club request: ' + (data.request_type || ''));
            const body = encodeURIComponent(
                `Request type: ${data.request_type}\nName: ${data.name}\nEmail: ${data.email}\n\nDetails:\n${data.message}`
            );
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
            return;
        }

        status.className = 'request-status';
        status.textContent = 'Sending...';

        fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                status.className = 'request-status success';
                status.textContent = '✅ Request sent — thank you! I will be in touch.';
            } else {
                status.className = 'request-status error';
                status.textContent = '⚠️ Something went wrong. Please try again.';
            }
        })
        .catch(() => {
            status.className = 'request-status error';
            status.textContent = '⚠️ Something went wrong. Please try again.';
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
            } else if (win.id === 'request') {
                // The Request form opens on the right side, to highlight it.
                win.style.left = Math.max(40, window.innerWidth - 620) + 'px';
                win.style.top = '80px';
            } else {
                win.style.left = (50 + index * 44) + 'px';
                win.style.top = (28 + index * 30) + 'px';
            }
        });
    }

    openInitialWindows() {
        // On phones, opening multiple cascaded windows is messy — show just one.
        if (window.innerWidth <= 768) {
            this.openWindow('videos');
            return;
        }
        // Only Videos and Newsletter open by default, stacked so neither
        // covers the other (Videos ends up focused on top).
        this.openWindow('newsletter');
        this.openWindow('videos');
        this.layoutDefaultWindows();
    }

    layoutDefaultWindows() {
        const newsletter = document.getElementById('newsletter');
        const videos = document.getElementById('videos');
        if (!newsletter || !videos) return;

        const margin = 24;
        // Offset the two windows diagonally: Newsletter to the right of
        // centre, Videos to the left — so they don't line up in a column.
        const place = (win, dir) => {
            const center = (window.innerWidth - win.offsetWidth) / 2;
            const offset = Math.max(0, Math.min(150, center - margin));
            return Math.round(Math.max(margin, center + dir * offset));
        };

        newsletter.style.left = place(newsletter, 1) + 'px';
        newsletter.style.top = margin + 'px';

        videos.style.left = place(videos, -1) + 'px';
        videos.style.top = (margin + newsletter.offsetHeight + 16) + 'px';
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
