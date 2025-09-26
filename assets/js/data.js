/**
 * CONFIGURAÇÃO DO SITE - EDITE AQUI O SEU CONTEÚDO
 *
 * Instruções:
 * 1. Edite os textos, links e informações abaixo
 * 2. Para fotos dos gatos: salve em assets/img/cats/ e referencie aqui
 * 3. Para Formspree: crie conta em formspree.io e cole o endpoint
 * 4. Mantenha a estrutura dos objetos para funcionamento correto
 */

// Verificar se está carregando
console.log('🎯 Carregando data.js...');

const SITE_DATA = {
    // ===== SOBRE VOCÊ =====
    about: `
        <div class="about-container"">
            <div class="about-photo">
                <img src="assets/img/perfil.png" alt="Minha foto" onerror="this.parentElement.innerHTML='<div class=about-fallback>👤</div>'">
            </div>
            <div class="about-text">
            <p><strong>Hi! During the day, I work on making DAO governance safer, and at night, I’m Batman.</strong></p>

            </br>
            <p>
              Web3 professional with expertise in
              <strong> Growth, Product & Project Management, Governance, Ecosystem Growth, and Education</strong>.
             </br>
             </br>
              Active in crypto since 2018, focused on <strong>DAO governance</strong>. I’ve launched an onchain reputation
              product, led governance security and research initiatives, and managed key partnerships.
              Experienced educator and speaker, passionate about making governance legible and safer.
            </p>
            </br>

            <p><em>Girls just wanna have ( ) fun &nbsp; (x) ETH.</em></p>
          </div>
        </div>
    `,

    // ===== EXPERIÊNCIAS PROFISSIONAIS =====
    experiences: [
        {
            company: "Moonwell / Mamo",
            period: "2025 - Present",
            roles: [
                {
                    title: "Growth Lead",
                    description: ["Leading the Growth function, building and executing strategies to expand adoption in LATAM. Also closing key ecosystem partnerships and organized strategic events to strengthen community presence and institutional relationships."]
                },
                {
                    title: "Front-end Developer",
                    description: ["JavaScript", "Vue.js", "CSS3", "HTML5", "RESTful APIs"]
                }
            ]
        },
        {
            company: "Digital Agency Co",
            period: "2020 - 2022",
            roles: [
                {
                    title: "Full-stack Developer",
                    description: ["Node.js", "Express", "MongoDB", "React", "Docker"]
                }
            ]
        },
        {
            company: "StartupXYZ",
            period: "2019 - 2020",
            roles: [
                {
                    title: "Junior Developer",
                    description: ["PHP", "MySQL", "WordPress", "jQuery", "Bootstrap"]
                }
            ]
        }
    ],

    // ===== PALESTRAS E TALKS =====
    talks: [
        {
            title: "React Performance: Otimizações Avançadas",
            url: "https://youtube.com/watch?v=exemplo1"
        },
        {
            title: "CSS Grid e Flexbox: Layout Moderno",
            url: "https://slides.com/exemplo/css-layout"
        },
        {
            title: "JavaScript ES2023: Novidades e Tendências",
            url: "https://youtube.com/watch?v=exemplo2"
        }
    ],

    // ===== LINKS PARA REDES SOCIAIS =====
    links: [
        {
            label: "LinkedIn",
            url: "https://linkedin.com/in/seuperfil"
        },
        {
            label: "GitHub",
            url: "https://github.com/seuusuario"
        },
        {
            label: "Twitter",
            url: "https://twitter.com/seuusuario"
        },
        {
            label: "Instagram",
            url: "https://instagram.com/seuusuario"
        },
        {
            label: "Portfolio",
            url: "https://seusite.com"
        }
    ],

    // ===== LISTA DE LEITURA (PASTAS POR TEMA) =====
    reading: [
        {
            folder: "Tecnologia",
            items: [
                {
                    title: "Clean Code - Robert Martin",
                    url: "https://amazon.com/clean-code"
                },
                {
                    title: "JavaScript: The Good Parts",
                    url: "https://amazon.com/javascript-good-parts"
                },
                {
                    title: "You Don't Know JS - Kyle Simpson",
                    url: "https://github.com/getify/You-Dont-Know-JS"
                }
            ]
        },
        {
            folder: "Design",
            items: [
                {
                    title: "Don't Make Me Think - Steve Krug",
                    url: "https://amazon.com/dont-make-me-think"
                },
                {
                    title: "The Design of Everyday Things",
                    url: "https://amazon.com/design-everyday-things"
                }
            ]
        },
        {
            folder: "Carreira",
            items: [
                {
                    title: "The Pragmatic Programmer",
                    url: "https://amazon.com/pragmatic-programmer"
                },
                {
                    title: "Soft Skills - John Sonmez",
                    url: "https://amazon.com/soft-skills"
                }
            ]
        }
    ],

    // ===== SEUS ARTIGOS (PASTAS POR TEMA) =====
    articles: [
        {
            folder: "Tutoriais",
            items: [
                {
                    title: "Como configurar React com TypeScript",
                    url: "https://seublog.com/react-typescript"
                },
                {
                    title: "CSS Grid: Guia Completo",
                    url: "https://seublog.com/css-grid-guia"
                }
            ]
        },
        {
            folder: "Reflexões",
            items: [
                {
                    title: "O futuro do desenvolvimento web",
                    url: "https://seublog.com/futuro-dev-web"
                },
                {
                    title: "Por que escolhi programação",
                    url: "https://seublog.com/por-que-programacao"
                }
            ]
        },
        {
            folder: "Reviews",
            items: [
                {
                    title: "Review: Curso de React Avançado",
                    url: "https://seublog.com/review-react-curso"
                }
            ]
        }
    ],

    // ===== HOBBIES E VIDA PESSOAL =====
    hobbies: `
        <p><strong>🎵 Música:</strong> Toco violão há 8 anos, principalmente MPB e rock nacional.</p>
        <br>
        <p><strong>📚 Leitura:</strong> Leio principalmente ficção científica e livros técnicos sobre programação.</p>
        <br>
        <p><strong>🎮 Games:</strong> Curto jogos indie e RPGs. Atualmente jogando Hollow Knight.</p>
        <br>
        <p><strong>🍳 Culinária:</strong> Adoro experimentar receitas novas, especialmente pratos japoneses.</p>
        <br>
        <p><strong>📸 Fotografia:</strong> Hobby recente, foco em street photography e retratos dos meus gatos.</p>
    `,

    // ===== SEUS GATOS =====
    cats: [
        {
            name: "Merlot – Chief Executive Diva",
            photo: "assets/img/cats/merlot.jpeg", // Crie esta pasta: assets/img/cats/
            bio: "Runs my entire life with an iron paw. Demands meetings on her schedule only and insists on daily compliments. HR nightmare, but too beautiful to replace."
        },
        {
            name: "Nietzsche – Director of Chaos & Public Relations",
            photo: "assets/img/cats/nietzsche.jpeg", // Crie esta pasta: assets/img/cats/
            bio: "Beloved by everyone, sweet to a fault, but leaves trails of destruction wherever he goes. Runs the office morale program by climbing where he shouldn’t."
        },
        {
            name: "Chardonnay – Head of Culinary Acquisitions",
            photo: "assets/img/cats/chardonnay.jpeg", // Crie esta pasta: assets/img/cats/
            bio: "Responsible for testing every snack 24/7. Knows how to sit and give a paw, which she shamelessly uses as a corporate manipulation tactic."
        },
        {
            name: "Kant – Chief Nap & Compliance Officer",
            photo: "assets/img/cats/kant.jpeg", // Crie esta pasta: assets/img/cats/
            bio: "Specializes in long sleeping shifts and terrified of sudden noises but enforces mandatory cuddle policies. Overweight but it’s “strategic mass."
        }
    ],

    // ===== CONFIGURAÇÃO DO FORMULÁRIO =====
    // Crie conta no formspree.io e cole o endpoint aqui
    // Exemplo: "https://formspree.io/f/abcd1234"
    // Se deixar null, usará mailto como fallback
    FORMSPREE_ENDPOINT: null, // <- EDITE AQUI com seu endpoint do Formspree

    // ===== PLAYLIST DO SPOTIFY =====
    // Link para sua playlist (editável no menu Start)
    SPOTIFY_PLAYLIST: "https://open.spotify.com/playlist/0eSQQn2x84pxmIMy4VueMj?si=e1a7435fb0714d93"
};

// Disponibilizar globalmente
window.SITE_DATA = SITE_DATA;

// Debug
console.log('✅ data.js carregado!', SITE_DATA);
