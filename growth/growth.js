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
        this.init();
    }

    init() {
        this.populate();
        this.setupTabs();
        this.setupSmoothScroll();
        this.setupActiveTabOnScroll();
        this.setClockInterval();
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
}

document.addEventListener('DOMContentLoaded', () => {
    new GrowthPage();
});

console.log('✅ growth.js loaded!');
