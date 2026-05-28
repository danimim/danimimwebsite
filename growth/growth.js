/**
 * Growth — /growth/
 * Vista Explorer-style single-window page. The GTM Engineering guide is
 * the only article and renders into the main pane; the sidebar links
 * scroll to its sections.
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
        this.setupSmoothScroll();
        this.setClockInterval();
        this.setupMusic();
    }

    populate() {
        const growth = (window.SITE_DATA && window.SITE_DATA.growth) || {};
        const article = (growth.articles || []).find(a => a.windowId === 'article-gtm');
        const articleEl = document.getElementById('article-gtm-content');
        if (articleEl && article) articleEl.innerHTML = article.html || '';
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
