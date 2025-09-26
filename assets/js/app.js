/**
 * Windows 95 Desktop Application
 * Main JavaScript functionality
 */

class Windows95Desktop {
    constructor() {
        this.zIndexCounter = 100;
        this.activeWindow = null;
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        this.isStartMenuOpen = false;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateContent();
        this.updateClock();
        this.setClockInterval();
        this.positionWindows();
    }

    setupEventListeners() {
        // Desktop icon clicks
        document.querySelectorAll('.desktop-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const windowId = icon.dataset.window;
                this.openWindow(windowId);
            });

            // Keyboard support for icons
            icon.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const windowId = icon.dataset.window;
                    this.openWindow(windowId);
                }
            });
        });

        // Window controls
        document.querySelectorAll('.window-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const window = btn.closest('.window');

                if (btn.classList.contains('close')) {
                    this.closeWindow(window.id);
                } else if (btn.classList.contains('minimize')) {
                    this.minimizeWindow(window.id);
                }
            });
        });

        // Window dragging
        document.querySelectorAll('.window-header').forEach(header => {
            header.addEventListener('pointerdown', (e) => {
                const window = header.closest('.window');
                this.startDrag(window, e);
            });
        });

        // Window focus
        document.querySelectorAll('.window').forEach(window => {
            window.addEventListener('pointerdown', () => {
                this.focusWindow(window.id);
            });
        });

        // Start button and menu
        const startBtn = document.getElementById('start-btn');
        const startMenu = document.getElementById('start-menu');

        startBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleStartMenu();
        });

        // Start menu items
        document.querySelectorAll('.start-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                this.handleStartMenuAction(action);
                this.closeStartMenu();
            });
        });

        // Close start menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!startBtn.contains(e.target) && !startMenu.contains(e.target)) {
                this.closeStartMenu();
            }
        });

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.activeWindow) {
                    this.closeWindow(this.activeWindow);
                }
                this.closeStartMenu();
            }
        });

        // Cats question handlers
        document.getElementById('cats-yes').addEventListener('click', () => {
            this.closeWindow('cats-question');
            this.openWindow('cats');
        });

        document.getElementById('cats-no').addEventListener('click', () => {
            this.closeWindow('cats-question');
            this.openWindow('error');
        });

        // Error OK button
        document.querySelector('.error-ok').addEventListener('click', () => {
            this.closeWindow('error');
        });

        // Message form
        document.getElementById('message-form').addEventListener('submit', (e) => {
            this.handleMessageSubmit(e);
        });

        document.querySelector('.cancel').addEventListener('click', () => {
            this.closeWindow('message');
        });

        // Pointer events for dragging
        document.addEventListener('pointermove', (e) => {
            if (this.isDragging) {
                this.handleDrag(e);
            }
        });

        document.addEventListener('pointerup', () => {
            this.isDragging = false;
        });
    }

    populateContent() {
        const data = window.SITE_DATA;

        // About content
        document.getElementById('about-content').innerHTML = data.about;

        // Experiences
        this.populateExperiences(data.experiences);

        // Talks
        this.populateTalks(data.talks);

        // Links
        this.populateLinks(data.links);

        // Reading list
        this.populateFolderView('reading-content', data.reading);

        // Articles
        this.populateFolderView('articles-content', data.articles);

        // Hobbies
        document.getElementById('hobbies-content').innerHTML = data.hobbies;

        // Cats
        this.populateCats(data.cats);
    }

    populateExperiences(experiences) {
        const container = document.getElementById('experiences-content');

        experiences.forEach(exp => {
            const expDiv = document.createElement('div');
            expDiv.className = 'experience-item';

            const header = document.createElement('div');
            header.className = 'experience-header';
            header.textContent = `${exp.company} (${exp.period})`;
            header.addEventListener('click', () => {
                const content = expDiv.querySelector('.experience-content');
                content.classList.toggle('expanded');
            });

            const content = document.createElement('div');
            content.className = 'experience-content';

            exp.roles.forEach(role => {
                const roleDiv = document.createElement('div');
                roleDiv.className = 'role-item';
                roleDiv.innerHTML = `
                    <div class="role-title">${role.title}</div>
                    <div class="role-years">${role.years}</div>
                    <div class="role-skills">Skills: ${role.skills.join(', ')}</div>
                `;
                content.appendChild(roleDiv);
            });

            expDiv.appendChild(header);
            expDiv.appendChild(content);
            container.appendChild(expDiv);
        });
    }

    populateTalks(talks) {
        const container = document.getElementById('talks-content');
        const list = document.createElement('ul');
        list.className = 'talks-list';

        talks.forEach(talk => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${talk.url}" target="_blank">${talk.title}</a>`;
            list.appendChild(li);
        });

        container.appendChild(list);
    }

    populateLinks(links) {
        const container = document.getElementById('links-content');
        const list = document.createElement('ul');
        list.className = 'links-list';

        links.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`;
            list.appendChild(li);
        });

        container.appendChild(list);
    }

    populateFolderView(containerId, folders) {
        const container = document.getElementById(containerId);

        const folderContainer = document.createElement('div');
        folderContainer.className = 'folder-container';

        folders.forEach((folder, index) => {
            const folderBtn = document.createElement('button');
            folderBtn.className = 'folder-item';
            folderBtn.innerHTML = `
                <img src="icons/folder.svg" alt="Folder" width="32" height="32">
                <span>${folder.folder}</span>
            `;

            const folderId = `${containerId}-folder-${index}`;
            folderBtn.addEventListener('click', () => {
                this.toggleFolder(folderId);
            });

            folderContainer.appendChild(folderBtn);

            const folderContent = document.createElement('div');
            folderContent.className = 'folder-content';
            folderContent.id = folderId;

            const list = document.createElement('ul');
            folder.items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
                list.appendChild(li);
            });

            folderContent.appendChild(list);
            container.appendChild(folderContent);
        });

        container.insertBefore(folderContainer, container.firstChild);
    }

    populateCats(cats) {
        const container = document.getElementById('cats-content');
        const gallery = document.createElement('div');
        gallery.className = 'cats-gallery';

        cats.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'cat-card';
            card.innerHTML = `
                <img src="${cat.photo}" alt="${cat.name}" onerror="this.src='icons/cats.svg'">
                <div class="cat-name">${cat.name}</div>
                <div class="cat-bio">${cat.bio}</div>
            `;
            gallery.appendChild(card);
        });

        container.appendChild(gallery);
    }

    toggleFolder(folderId) {
        const folder = document.getElementById(folderId);
        const allFolders = document.querySelectorAll('.folder-content');

        // Close other folders
        allFolders.forEach(f => {
            if (f.id !== folderId) {
                f.classList.remove('active');
            }
        });

        // Toggle current folder
        folder.classList.toggle('active');
    }

    openWindow(windowId) {
        const window = document.getElementById(windowId);
        if (!window) return;

        window.classList.add('active');
        window.classList.remove('minimized');
        this.focusWindow(windowId);
    }

    closeWindow(windowId) {
        const window = document.getElementById(windowId);
        if (!window) return;

        window.classList.remove('active');

        if (this.activeWindow === windowId) {
            this.activeWindow = null;
        }
    }

    minimizeWindow(windowId) {
        const window = document.getElementById(windowId);
        if (!window) return;

        window.classList.add('minimized');
        window.classList.remove('active');

        if (this.activeWindow === windowId) {
            this.activeWindow = null;
        }
    }

    focusWindow(windowId) {
        this.activeWindow = windowId;
        const window = document.getElementById(windowId);
        if (!window) return;

        this.zIndexCounter++;
        window.style.zIndex = this.zIndexCounter;
    }

    startDrag(window, e) {
        this.isDragging = true;
        this.draggedWindow = window;

        const rect = window.getBoundingClientRect();
        this.dragOffset.x = e.clientX - rect.left;
        this.dragOffset.y = e.clientY - rect.top;

        this.focusWindow(window.id);
        e.preventDefault();
    }

    handleDrag(e) {
        if (!this.isDragging || !this.draggedWindow) return;

        const x = e.clientX - this.dragOffset.x;
        const y = e.clientY - this.dragOffset.y;

        // Keep window within bounds
        const maxX = window.innerWidth - this.draggedWindow.offsetWidth;
        const maxY = window.innerHeight - this.draggedWindow.offsetHeight - 32; // Account for taskbar

        const constrainedX = Math.max(0, Math.min(x, maxX));
        const constrainedY = Math.max(0, Math.min(y, maxY));

        this.draggedWindow.style.left = constrainedX + 'px';
        this.draggedWindow.style.top = constrainedY + 'px';
    }

    positionWindows() {
        const windows = document.querySelectorAll('.window');
        windows.forEach((window, index) => {
            const offset = index * 30;
            window.style.left = (100 + offset) + 'px';
            window.style.top = (50 + offset) + 'px';
        });
    }

    toggleStartMenu() {
        const startMenu = document.getElementById('start-menu');
        const startBtn = document.getElementById('start-btn');

        this.isStartMenuOpen = !this.isStartMenuOpen;

        if (this.isStartMenuOpen) {
            startMenu.classList.add('active');
            startBtn.classList.add('active');
        } else {
            startMenu.classList.remove('active');
            startBtn.classList.remove('active');
        }
    }

    closeStartMenu() {
        const startMenu = document.getElementById('start-menu');
        const startBtn = document.getElementById('start-btn');

        this.isStartMenuOpen = false;
        startMenu.classList.remove('active');
        startBtn.classList.remove('active');
    }

    handleStartMenuAction(action) {
        switch (action) {
            case 'playlist':
                window.open(window.SITE_DATA.SPOTIFY_PLAYLIST, '_blank');
                break;
            case 'message':
                this.openWindow('message');
                break;
            case 'cats':
                this.openWindow('cats-question');
                break;
            case 'hobbies':
                this.openWindow('hobbies');
                break;
        }
    }

    handleMessageSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (window.SITE_DATA.FORMSPREE_ENDPOINT) {
            // Send via Formspree
            fetch(window.SITE_DATA.FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Mensagem enviada com sucesso!');
                    e.target.reset();
                    this.closeWindow('message');
                } else {
                    alert('Erro ao enviar mensagem. Tente novamente.');
                }
            })
            .catch(() => {
                alert('Erro ao enviar mensagem. Tente novamente.');
            });
        } else {
            // Fallback to mailto
            const subject = encodeURIComponent('Mensagem do site');
            const body = encodeURIComponent(
                `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`
            );
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        }
    }

    updateClock() {
        const clock = document.getElementById('clock');
        const now = new Date();
        const time = now.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
        clock.textContent = time;
    }

    setClockInterval() {
        // Update clock every minute
        setInterval(() => {
            this.updateClock();
        }, 60000);
    }
}

// Initialize the desktop when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Windows95Desktop();
});
