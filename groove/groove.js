/**
 * Groove Crypto Club — second page (/groove/)
 * Trimmed copy of the main Windows95Desktop windowing logic. Content is read
 * from window.SITE_DATA.groove (defined in /assets/js/data.js).
 *
 * The Turntable uses a hidden YouTube IFrame player as its audio engine, so
 * the visible UI stays fully Windows 95 styled.
 */

console.log('Loading groove.js...');

class GrooveDesktop {
    constructor() {
        window.grooveDesktop = this;

        this.zIndexCounter = 100;
        this.activeWindow = null;
        this.isDragging = false;
        this.draggedWindow = null;
        this.dragOffset = { x: 0, y: 0 };
        this.isStartMenuOpen = false;

        // Turntable state
        this.records = [];
        this.recordIndex = 0;
        this.ttState = 'stopped';

        // YouTube audio engine state
        this.ytPlayer = null;
        this.ytReady = false;
        this.ytPending = null;
        this.ytLoadedKey = '';
        this.currentSourceType = null;

        this.init();
    }

    init() {
        this.populateContent();
        this.setupEventListeners();
        this.positionWindows();
        this.setClockInterval();
        this.openInitialWindows();
        this.initYouTube();
    }

    populateContent() {
        const groove = (window.SITE_DATA && window.SITE_DATA.groove) || {};
        this.records = groove.vinyl || [];
        this.populateVideos(groove);
        this.populateNewsletter(groove);
        this.populateVinyl(groove);
        this.populateTurntable(groove);
        this.populateDonate(groove);
        this.populateAbout(groove);
    }

    populateVideos(groove) {
        const container = document.getElementById('videos-content');
        const grid = document.createElement('div');
        grid.className = 'video-grid';

        (groove.videos || []).forEach(video => {
            const hasUrl = video.url && video.url !== '#';
            const card = document.createElement(hasUrl ? 'a' : 'div');
            card.className = hasUrl ? 'video-card' : 'video-card video-soon';
            if (hasUrl) {
                card.href = video.url;
                card.target = '_blank';
                card.rel = 'noopener';
            }
            card.innerHTML = `
                <div class="video-thumb">
                    <img src="${video.thumbnail || ''}" alt="${video.title || ''}" onerror="this.remove()">
                </div>
                <div class="video-title">${video.title || ''}</div>
                ${video.description ? `<div class="video-desc">${video.description}</div>` : ''}
                <span class="video-cta">${hasUrl ? 'Watch on Instagram' : 'Coming soon'}</span>
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

        if (nl.comingSoon) {
            const soon = document.createElement('div');
            soon.className = 'nl-soon';
            soon.innerHTML = `
                <div class="nl-soon-title">Newsletter coming soon</div>
                <div class="nl-soon-text">I'm putting it together. Check back soon.</div>
            `;
            container.appendChild(soon);
            return;
        }

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

    populateVinyl() {
        const container = document.getElementById('vinyl-content');

        const intro = document.createElement('p');
        intro.className = 'vinyl-intro';
        intro.textContent = 'Click any record to play it on the Turntable.';
        container.appendChild(intro);

        container.appendChild(this.buildRecordList());
    }

    buildRecordList() {
        const list = document.createElement('ul');
        list.className = 'vinyl-list';

        this.records.forEach((record, i) => {
            const li = document.createElement('li');
            li.dataset.index = i;
            li.tabIndex = 0;
            const meta = [record.artist, record.year, record.genre].filter(Boolean).join(' &middot; ');
            li.innerHTML = `
                <span class="vinyl-cover">${record.cover ? `<img src="${record.cover}" alt="" onerror="this.remove()">` : ''}</span>
                <span class="vinyl-info">
                    <span class="vinyl-album">${record.album || ''}</span>
                    <span class="vinyl-artist">${meta}</span>
                </span>
                <span class="vinyl-play">&#9658;</span>
            `;
            li.addEventListener('click', () => this.playRecord(i));
            li.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.playRecord(i);
                }
            });
            list.appendChild(li);
        });

        return list;
    }

    populateTurntable(groove) {
        const container = document.getElementById('turntable-content');

        const turntable = document.createElement('div');
        turntable.className = 'turntable';
        turntable.innerHTML = `
            <div class="tt-deck">
                <div class="tt-cover" id="tt-cover"></div>
                <div class="tt-platter">
                    <div class="tt-record" id="tt-record">
                        <div class="tt-label" id="tt-label"><div class="tt-hole"></div></div>
                    </div>
                    <div class="tt-arm"></div>
                </div>
            </div>
            <div class="player-display">
                <div class="player-lcd">
                    <span class="player-track-num" id="tt-num">--</span>
                    <span class="player-track-title" id="tt-title">No record loaded</span>
                </div>
                <div class="player-status" id="tt-status">&#9632; STOPPED</div>
            </div>
            <div class="player-controls">
                <button class="player-btn" data-tt="prev" aria-label="Previous">|&#9668;</button>
                <button class="player-btn" data-tt="play" aria-label="Play">&#9658;</button>
                <button class="player-btn" data-tt="pause" aria-label="Pause">||</button>
                <button class="player-btn" data-tt="stop" aria-label="Stop">&#9632;</button>
                <button class="player-btn" data-tt="next" aria-label="Next">&#9658;|</button>
            </div>
            <div class="tt-pick">Pick a record to play it:</div>
        `;
        container.appendChild(turntable);
        turntable.appendChild(this.buildRecordList());

        turntable.querySelectorAll('.player-btn').forEach(btn => {
            btn.addEventListener('click', () => this.ttControl(btn.dataset.tt));
        });

        this.ttRender();
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

    /* ===== Turntable ===== */

    playRecord(index) {
        const record = this.records[index];
        if (!record) return;

        this.recordIndex = index;
        this.ttState = 'playing';

        const source = this.ytParse(record.youtube);
        this.currentSourceType = source ? source.type : null;
        if (source) {
            this.ytLoad(source, true);
            this.ytLoadedKey = record.youtube;
        } else {
            this.ytStop();
            this.ytLoadedKey = '';
        }

        this.openWindow('turntable');
        this.ttRender();
    }

    ttControl(action) {
        switch (action) {
            case 'play': this.ttPlay(); break;
            case 'pause': this.ttPause(); break;
            case 'stop': this.ttStop(); break;
            case 'prev': this.ttStep(-1); break;
            case 'next': this.ttStep(1); break;
        }
    }

    ttPlay() {
        if (!this.records.length) return;
        if (this.ytLoadedKey) {
            this.ttState = 'playing';
            this.ytResume();
            this.ttRender();
        } else {
            this.playRecord(this.recordIndex);
        }
    }

    ttPause() {
        if (this.ttState !== 'playing') return;
        this.ttState = 'paused';
        this.ytPause();
        this.ttRender();
    }

    ttStop() {
        this.ttState = 'stopped';
        this.ytStop();
        this.ytLoadedKey = '';
        this.ttRender();
    }

    ttStep(direction) {
        if (!this.records.length) return;
        const count = this.records.length;
        const index = (this.recordIndex + direction + count) % count;
        this.playRecord(index);
    }

    ttRender() {
        const record = this.records[this.recordIndex];
        const numEl = document.getElementById('tt-num');
        const titleEl = document.getElementById('tt-title');
        const statusEl = document.getElementById('tt-status');
        const recordEl = document.getElementById('tt-record');
        const labelEl = document.getElementById('tt-label');
        if (!numEl || !titleEl || !statusEl || !recordEl) return;

        if (record) {
            numEl.textContent = String(this.recordIndex + 1).padStart(2, '0');
            titleEl.textContent = `${record.album || ''}${record.artist ? ' — ' + record.artist : ''}`;
        } else {
            numEl.textContent = '--';
            titleEl.textContent = 'No record loaded';
        }

        const hasAudio = record && this.ytParse(record.youtube);
        let status = '&#9632; STOPPED';
        if (this.ttState === 'playing') {
            status = hasAudio ? '&#9658; PLAYING' : '&#9658; SPINNING (no audio linked)';
        } else if (this.ttState === 'paused') {
            status = '|| PAUSED';
        }
        statusEl.innerHTML = status;

        recordEl.classList.toggle('spinning', this.ttState === 'playing');
        if (labelEl) labelEl.style.background = this.ttLabelColor(this.recordIndex);

        const coverEl = document.getElementById('tt-cover');
        if (coverEl) {
            const album = record ? (record.album || '') : '';
            coverEl.style.backgroundColor = this.ttLabelColor(this.recordIndex);
            coverEl.innerHTML = `<span class="tt-cover-name">${album}</span>`
                + (record && record.cover ? `<img src="${record.cover}" alt="${album}" onerror="this.remove()">` : '');
        }

        const playBtn = document.querySelector('.player-btn[data-tt="play"]');
        const pauseBtn = document.querySelector('.player-btn[data-tt="pause"]');
        if (playBtn) playBtn.classList.toggle('pressed', this.ttState === 'playing');
        if (pauseBtn) pauseBtn.classList.toggle('pressed', this.ttState === 'paused');

        document.querySelectorAll('.vinyl-list li').forEach((li) => {
            const idx = Number(li.dataset.index);
            li.classList.toggle('playing', idx === this.recordIndex && this.ttState !== 'stopped');
        });

        const miniTrack = document.getElementById('mini-track');
        const miniDisc = document.getElementById('mini-disc');
        const miniToggle = document.getElementById('mini-toggle');
        if (miniTrack) miniTrack.textContent = record ? (record.album || '') : 'No record';
        if (miniDisc) miniDisc.classList.toggle('spinning', this.ttState === 'playing');
        if (miniToggle) miniToggle.innerHTML = this.ttState === 'playing' ? '||' : '&#9658;';
    }

    ttLabelColor(index) {
        const colors = ['#c0392b', '#2c3e7a', '#1f7a4d', '#b8860b', '#7a2c6e', '#0f6f8c'];
        return colors[index % colors.length];
    }

    /* ===== YouTube audio engine (hidden player) ===== */

    initYouTube() {
        if (window.YT && window.YT.Player) {
            this.createYTPlayer();
        }
        // Otherwise the global onYouTubeIframeAPIReady callback handles it.
    }

    createYTPlayer() {
        if (this.ytPlayer || !window.YT || !window.YT.Player) return;
        this.ytPlayer = new YT.Player('yt-audio', {
            height: '120',
            width: '200',
            playerVars: { playsinline: 1 },
            events: {
                onReady: () => {
                    this.ytReady = true;
                    if (this.ytPending) {
                        const pending = this.ytPending;
                        this.ytPending = null;
                        this.ytLoad(pending.source, pending.autoplay);
                    }
                },
                onStateChange: (e) => {
                    if (e.data === YT.PlayerState.ENDED && this.currentSourceType === 'video') this.ttStep(1);
                }
            }
        });
    }

    ytLoad(source, autoplay) {
        if (this.ytPlayer && this.ytReady) {
            if (source.type === 'playlist') {
                if (autoplay) this.ytPlayer.loadPlaylist({ list: source.id, listType: 'playlist' });
                else this.ytPlayer.cuePlaylist({ list: source.id, listType: 'playlist' });
            } else {
                if (autoplay) this.ytPlayer.loadVideoById(source.id);
                else this.ytPlayer.cueVideoById(source.id);
            }
        } else {
            this.ytPending = { source: source, autoplay: autoplay };
        }
    }

    ytResume() {
        if (this.ytPlayer && this.ytReady) this.ytPlayer.playVideo();
    }

    ytPause() {
        if (this.ytPlayer && this.ytReady) this.ytPlayer.pauseVideo();
    }

    ytStop() {
        if (this.ytPlayer && this.ytReady) this.ytPlayer.stopVideo();
    }

    ytParse(value) {
        if (!value) return null;
        const s = String(value).trim();
        const listMatch = s.match(/[?&]list=([A-Za-z0-9_-]+)/);
        if (listMatch) return { type: 'playlist', id: listMatch[1] };
        if (/^[A-Za-z0-9_-]{11}$/.test(s)) return { type: 'video', id: s };
        if (/^(PL|OLAK5uy|RD)[A-Za-z0-9_-]{12,}$/.test(s)) return { type: 'playlist', id: s };
        const vMatch = s.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
        if (vMatch) return { type: 'video', id: vMatch[1] };
        return null;
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

        // Mini player (shown while the Turntable is minimized)
        const miniplayer = document.getElementById('miniplayer');
        if (miniplayer) {
            miniplayer.addEventListener('click', () => this.openWindow('turntable'));
            document.getElementById('mini-toggle').addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.ttState === 'playing') this.ttPause();
                else this.ttPlay();
            });
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
        if (windowId === 'turntable') this.hideMiniplayer();
    }

    closeWindow(windowId) {
        const win = document.getElementById(windowId);
        if (!win) return;
        win.classList.remove('active');
        if (this.activeWindow === windowId) this.activeWindow = null;
        if (windowId === 'turntable') {
            this.ttStop();
            this.hideMiniplayer();
        }
    }

    minimizeWindow(windowId) {
        const win = document.getElementById(windowId);
        if (!win) return;
        win.classList.add('minimized');
        win.classList.remove('active');
        if (this.activeWindow === windowId) this.activeWindow = null;
        if (windowId === 'turntable') this.showMiniplayer();
    }

    showMiniplayer() {
        const m = document.getElementById('miniplayer');
        if (m) m.classList.add('active');
    }

    hideMiniplayer() {
        const m = document.getElementById('miniplayer');
        if (m) m.classList.remove('active');
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
        // On phones, cascaded windows are messy, so show just one.
        if (window.innerWidth <= 768) {
            this.openWindow('videos');
            return;
        }
        this.openWindow('newsletter');
        this.openWindow('videos');
        this.layoutDefaultWindows();
    }

    layoutDefaultWindows() {
        const newsletter = document.getElementById('newsletter');
        const videos = document.getElementById('videos');
        if (!newsletter || !videos) return;

        const margin = 24;
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

// The YouTube IFrame API calls this global when it finishes loading.
window.onYouTubeIframeAPIReady = function () {
    if (window.grooveDesktop) window.grooveDesktop.createYTPlayer();
};

document.addEventListener('DOMContentLoaded', () => {
    new GrooveDesktop();
});

console.log('✅ groove.js loaded!');
