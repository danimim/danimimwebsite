/**
 * Growth — /growth/
 * Vista Explorer-style single-window page. The GTM Engineering guide is
 * the only article and renders into the main pane; the sidebar links
 * scroll to its sections. Donate is an in-page section at the bottom.
 */

console.log('Loading growth.js...');

class GrowthPage {
    constructor() {
        window.growthPage = this;

        // Background-music state (YouTube IFrame API).
        this.ytPlayer = null;
        this.ytReady = false;
        this.musicPlaying = false;
        this.MUSIC_VOLUME = 30;
        this.MUSIC_RADIO = 'RDDP3rDP02lE0'; // auto-generated radio mix from the seed video

        this.init();
    }

    init() {
        this.populate();
        this.setupTabs();
        this.setupSmoothScroll();
        this.setupActiveTabOnScroll();
        this.setClockInterval();
        this.setupMusic();
    }

    populate() {
        const growth = (window.SITE_DATA && window.SITE_DATA.growth) || {};

        // Article (only one — the GTM Engineering guide)
        const article = (growth.articles || []).find(a => a.windowId === 'article-gtm');
        const articleEl = document.getElementById('article-gtm-content');
        if (articleEl && article) articleEl.innerHTML = article.html || '';

        // Donate panel
        this.renderDonate(growth.donate || {});
    }

    renderDonate(donate) {
        const container = document.getElementById('donate-content');
        if (!container) return;

        container.innerHTML = `
            <p class="donate-intro">${donate.intro || ''}</p>
            <div class="wallet-item">
                <div class="wallet-chain">Donation address</div>
                ${donate.note ? `<div class="wallet-note">${donate.note}</div>` : ''}
                <div class="wallet-row">
                    <code class="wallet-address">${donate.address || ''}</code>
                    <button type="button" class="btn btn-green wallet-copy">Copy</button>
                </div>
            </div>
        `;
        const copyBtn = container.querySelector('.wallet-copy');
        if (copyBtn) copyBtn.addEventListener('click', () => this.copyToClipboard(donate.address || '', copyBtn));
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

    setupTabs() {
        // Tab clicks: scroll to the target section in the main pane,
        // and mark the tab active (unless it links to another page).
        document.querySelectorAll('.tab').forEach(tab => {
            if (tab.classList.contains('tab-home')) return;
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }

    setupSmoothScroll() {
        // Sidebar + tabs: smooth-scroll within the main pane to the
        // anchor, even though .explorer-main is the scroll container.
        const main = document.getElementById('main');
        if (!main) return;

        const handler = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const href = a.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top
                - main.getBoundingClientRect().top
                + main.scrollTop
                - 12;
            main.scrollTo({ top, behavior: 'smooth' });
        };

        document.addEventListener('click', handler);
    }

    setupActiveTabOnScroll() {
        // Flip the active tab between Guide / Donate based on what's in view.
        const main = document.getElementById('main');
        const donateSec = document.getElementById('g-donate');
        const guideTab = document.querySelector('.tab[href="#g-sec-0"]');
        const donateTab = document.querySelector('.tab[href="#g-donate"]');
        if (!main || !donateSec || !guideTab || !donateTab) return;

        main.addEventListener('scroll', () => {
            const donateTop = donateSec.getBoundingClientRect().top - main.getBoundingClientRect().top;
            const donateInView = donateTop < 120;
            guideTab.classList.toggle('active', !donateInView);
            donateTab.classList.toggle('active', donateInView);
        });
    }

    updateClock() {
        const clock = document.getElementById('clock');
        if (!clock) return;
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const date = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
        clock.textContent = `${date}  ${time}`;
    }

    setClockInterval() {
        this.updateClock();
        setInterval(() => this.updateClock(), 30000);
    }

    /* ===== Background music (YouTube IFrame API, hidden player) ===== */

    setupMusic() {
        const btn = document.getElementById('music-toggle');
        if (btn) btn.addEventListener('click', () => this.toggleMusic());

        // If the iframe API has already loaded by the time we get here,
        // build the player now. Otherwise the global onYouTubeIframeAPIReady
        // callback below picks it up.
        if (window.YT && window.YT.Player) this.createYTPlayer();
    }

    createYTPlayer() {
        if (this.ytPlayer || !window.YT || !window.YT.Player) return;
        this.ytPlayer = new YT.Player('yt-audio', {
            height: '0',
            width: '0',
            playerVars: { playsinline: 1 },
            events: {
                onReady: (e) => {
                    this.ytReady = true;
                    e.target.setVolume(this.MUSIC_VOLUME);
                    e.target.loadPlaylist({
                        list: this.MUSIC_RADIO,
                        listType: 'playlist'
                    });
                    // Best-effort autoplay. Most browsers block this unless
                    // the user has interacted with the page, but it costs
                    // nothing to try; the music-toggle button is the fallback.
                    setTimeout(() => {
                        try { e.target.playVideo(); } catch (_) {}
                    }, 250);
                },
                onStateChange: (e) => {
                    if (!window.YT || !YT.PlayerState) return;
                    this.musicPlaying = e.data === YT.PlayerState.PLAYING;
                    this.updateMusicButton();
                    // Keep volume pinned at 30% in case the player resets it.
                    if (this.musicPlaying && this.ytPlayer.getVolume() !== this.MUSIC_VOLUME) {
                        this.ytPlayer.setVolume(this.MUSIC_VOLUME);
                    }
                }
            }
        });
    }

    toggleMusic() {
        if (!this.ytPlayer || !this.ytReady) return;
        const state = this.ytPlayer.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            this.ytPlayer.pauseVideo();
        } else {
            this.ytPlayer.setVolume(this.MUSIC_VOLUME);
            this.ytPlayer.playVideo();
        }
    }

    updateMusicButton() {
        const btn = document.getElementById('music-toggle');
        const label = btn && btn.querySelector('.music-label');
        if (!btn) return;
        btn.classList.toggle('playing', this.musicPlaying);
        if (label) label.textContent = this.musicPlaying ? 'Pause music' : 'Play music';
    }
}

// YouTube IFrame API global callback.
window.onYouTubeIframeAPIReady = function () {
    if (window.growthPage) window.growthPage.createYTPlayer();
};

document.addEventListener('DOMContentLoaded', () => {
    new GrowthPage();
});

console.log('✅ growth.js loaded!');
