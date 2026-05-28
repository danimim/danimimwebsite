/**
 * Growth — second page (/growth/)
 * Vista/Aero themed windowing logic. Content is read from
 * window.SITE_DATA.growth (defined in /assets/js/data.js).
 */

console.log('Loading growth.js...');

class GrowthDesktop {
    constructor() {
        window.growthDesktop = this;

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
        const growth = (window.SITE_DATA && window.SITE_DATA.growth) || {};
        this.populateAbout(growth);
        this.populateArticles(growth);
        this.populateArticleWindows(growth);
        this.populateResources(growth);
        this.populateToolstack(growth);
        this.populateDonate(growth);
    }

    populateAbout(growth) {
        const container = document.getElementById('about-content');
        if (container) container.innerHTML = growth.about || '';
    }

    populateArticles(growth) {
        const container = document.getElementById('articles-content');
        if (!container) return;

        const intro = document.createElement('p');
        intro.className = 'articles-intro';
        intro.textContent = growth.articlesIntro || 'Learning notes and working documents. Click any card to read.';
        container.appendChild(intro);

        (growth.articles || []).forEach(article => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'article-card';
            card.innerHTML = `
                <span class="article-card-title">${article.title || ''}</span>
                <span class="article-card-meta">
                    ${article.status ? `<span class="meta-pill">${article.status}</span>` : ''}
                    ${article.date ? `<span>Last updated: ${article.date}</span>` : ''}
                </span>
                <span class="article-card-summary">${article.summary || ''}</span>
                <span class="article-card-cta">&#9654; Read</span>
            `;
            card.addEventListener('click', () => {
                if (article.windowId) this.openWindow(article.windowId);
            });
            container.appendChild(card);
        });

        (growth.upcoming || []).forEach(item => {
            const card = document.createElement('div');
            card.className = 'article-card soon';
            card.innerHTML = `
                <span class="article-card-title">${item.title || ''}</span>
                <span class="article-card-meta"><span class="meta-pill" style="background:linear-gradient(180deg,#dfe7ec,#a5b3bd);color:#1f3140;border-color:rgba(0,0,0,0.25);">Coming soon</span></span>
                <span class="article-card-summary">${item.summary || ''}</span>
            `;
            container.appendChild(card);
        });
    }

    populateArticleWindows(growth) {
        (growth.articles || []).forEach(article => {
            if (!article.windowId) return;
            const container = document.getElementById(article.windowId + '-content');
            if (container) container.innerHTML = article.html || '';
        });
    }

    populateResources(growth) {
        const container = document.getElementById('resources-content');
        if (!container) return;

        if (growth.resourcesIntro) {
            const p = document.createElement('p');
            p.className = 'articles-intro';
            p.textContent = growth.resourcesIntro;
            container.appendChild(p);
        }

        (growth.resources || []).forEach(block => {
            const wrap = document.createElement('div');
            wrap.className = 'resource-block';
            const h = document.createElement('h3');
            h.textContent = block.category;
            wrap.appendChild(h);
            const list = document.createElement('ul');
            list.className = 'resource-list';
            (block.items || []).forEach(item => {
                const li = document.createElement('li');
                const a = item.url
                    ? `<a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>`
                    : `<strong>${item.title}</strong>`;
                li.innerHTML = `${a}${item.desc ? `<span class="desc">${item.desc}</span>` : ''}`;
                list.appendChild(li);
            });
            wrap.appendChild(list);
            container.appendChild(wrap);
        });
    }

    populateToolstack(growth) {
        const container = document.getElementById('toolstack-content');
        if (!container) return;

        if (growth.toolstackIntro) {
            const p = document.createElement('p');
            p.className = 'articles-intro';
            p.textContent = growth.toolstackIntro;
            container.appendChild(p);
        }

        (growth.toolstack || []).forEach(block => {
            const wrap = document.createElement('div');
            wrap.className = 'resource-block';
            const h = document.createElement('h3');
            h.textContent = block.category;
            wrap.appendChild(h);
            const list = document.createElement('ul');
            list.className = 'resource-list';
            (block.items || []).forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${item.tool}</strong>${item.role ? ` — ${item.role}` : ''}${item.note ? `<span class="desc">${item.note}</span>` : ''}`;
                list.appendChild(li);
            });
            wrap.appendChild(list);
            container.appendChild(wrap);
        });
    }

    populateDonate(growth) {
        const container = document.getElementById('donate-content');
        if (!container) return;
        const donate = growth.donate || {};

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
                <button type="button" class="btn btn-green wallet-copy">Copy</button>
            </div>
        `;
        const copyBtn = item.querySelector('.wallet-copy');
        copyBtn.addEventListener('click', () => this.copyToClipboard(donate.address || '', copyBtn));
        container.appendChild(item);
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
        // Desktop icons (grid + side)
        document.querySelectorAll('.desktop-icon').forEach(icon => {
            if (icon.dataset.window) {
                icon.addEventListener('click', () => this.openWindow(icon.dataset.window));
                icon.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.openWindow(icon.dataset.window);
                    }
                });
            }
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
                if (e.target.closest('.window-btn')) return;
                this.startDrag(header.closest('.window'), e);
            });
        });

        document.querySelectorAll('.window').forEach(win => {
            win.addEventListener('pointerdown', () => this.focusWindow(win.id));
        });

        document.addEventListener('pointermove', (e) => {
            if (this.isDragging) this.handleDrag(e);
        });
        document.addEventListener('pointerup', () => { this.isDragging = false; });

        // Anchor link scrolling inside article windows
        document.addEventListener('click', (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const href = a.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target && a.closest('.window-content')) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

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
        const maxY = window.innerHeight - this.draggedWindow.offsetHeight - 48;
        this.draggedWindow.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        this.draggedWindow.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
    }

    positionWindows() {
        const isMobile = window.innerWidth <= 768;
        document.querySelectorAll('.window').forEach((win, index) => {
            if (isMobile) {
                win.style.left = '2.5vw';
                win.style.top = (10 + index * 6) + 'px';
            } else {
                win.style.left = (70 + index * 40) + 'px';
                win.style.top = (40 + index * 28) + 'px';
            }
        });
    }

    openInitialWindows() {
        if (window.innerWidth <= 768) {
            this.openWindow('about');
            return;
        }
        this.openWindow('articles');
        this.openWindow('about');
        this.layoutDefaultWindows();
    }

    layoutDefaultWindows() {
        const about = document.getElementById('about');
        const articles = document.getElementById('articles');
        if (!about || !articles) return;

        const margin = 28;
        about.style.left = margin + 'px';
        about.style.top = margin + 'px';

        const articlesLeft = Math.max(margin + about.offsetWidth + 20, window.innerWidth - articles.offsetWidth - margin);
        articles.style.left = articlesLeft + 'px';
        articles.style.top = margin + 'px';
    }

    toggleStartMenu() {
        this.isStartMenuOpen ? this.closeStartMenu() : this.openStartMenu();
    }
    openStartMenu() {
        this.isStartMenuOpen = true;
        document.getElementById('start-menu').classList.add('active');
    }
    closeStartMenu() {
        this.isStartMenuOpen = false;
        document.getElementById('start-menu').classList.remove('active');
    }

    updateClock() {
        const clock = document.getElementById('clock');
        if (!clock) return;
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const date = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
        clock.innerHTML = `<div style="display:flex;flex-direction:column;align-items:flex-end;line-height:1.1"><span>${time}</span><span style="font-size:10px;opacity:0.85">${date}</span></div>`;
    }

    setClockInterval() {
        this.updateClock();
        setInterval(() => this.updateClock(), 30000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GrowthDesktop();
});

console.log('✅ growth.js loaded!');
