// Verificar se está carregando
console.log('Downloading data.js...');

const SITE_DATA = {
    // ===== SOBRE VOCÊ =====
    about: `
        <div class="about-container"">
            <div class="about-photo">
                <img src="assets/img/perfil.png" alt="Minha foto" onerror="this.parentElement.innerHTML='<div class=about-fallback>👤</div>'">
            </div>
            <div class="about-text">
            <p><strong>Hi! During the day, I work on making DAO governance safer, and at night, I'm Batman.</strong></p>

            </br>
            <p>
              Web3 professional with expertise in
              <strong> Growth, Product & Project Management, Governance, Ecosystem Growth, and Education</strong>.
             </br>
             </br>
              Active in crypto since 2018, focused on <strong>DAO governance</strong>. I've launched an onchain reputation
              product, led governance security, and managed key partnerships.
              Experienced educator and speaker, passionate about making governance legible and safer.
            </p>
            </br>

            <p>
            <strong>Community Involvement:</strong>
             </br>
              - Core Member, Nouns DAO Brasil</br>
              - Chainlink Advocate</br>
              - Active governance participant (Arbitrum and Scroll)</br>
              - DAOIP-5 (Metagov) facilitator</br>
              - Speaker @ ETH Denver 2024 and 2025, ETH Belgrade 2023 and 2024, ETH Argentina 2023 and the major key events in Brazil</br>
              - MBA teacher for Trevisan and Catholic University of Recife invited by the Federal Public Prosecutor of Brazil.</br>
              </p>
              </br>
              </br>

            <p><em>Girls just wanna have ( ) fun &nbsp; (x) ETH</em></p>
          </div>
        </div>
    `,

    // ===== EXPERIÊNCIAS PROFISSIONAIS =====
    experiences: [
        {
            company: "Blockful",
            period: "2023 - 2026",
            roles: [
                {
                    title: "Growth and Governance Lead",
                    description: ["Leading Anticapture product (product addressing critical security issues in DAOs) governance strategies, helping to secure funding from Optimism, Uniswsap Foundation and ENS. Developed an onchain reputation product, securing $200k in MVP funding. Acting as a governance delegate for Arbitrum and Scroll, emphasizing security and Public Goods."]
                }
            ]
        },
        {
            company: "Moonwell / Mamo",
            period: "2025 - 2026",
            roles: [
                {
                    title: "Growth Lead",
                    description: ["Leading the Growth function, building and executing strategies to expand adoption in LATAM. Also closing key ecosystem partnerships and organized strategic events to strengthen community presence and institutional relationships."]
                },
            ]
        },
        {
            company: "Balancer",
            period: "2024 - 2025",
            roles: [
                {
                    title: "OpCo Community Growth",
                    description: ["Managed community engagement, leveraging knowledge in DeFi and DAO governance. Supported internal operations within the Balancer ecosystem."]
                }
            ]
        },
        {
            company: "NFTFY",
            period: "2021 - 2023",
            roles: [
                {
                    title: "Growth Lead",
                    description: ["Directed DeFi campaigns, secured strategic partnerships, and integrated product features with market demands. Focused on growth and liquidity solutions using Uniswap infrastructure."]
                }
            ]
        },
        {
            company: "Nouns Brasil",
            period: "2021 - 2023",
            roles: [
                {
                    title: "Core Member",
                    description: ["Helped the initial phase of the DAO, comms, noggles, and all things nounish."]
                }
            ]
        },
        {
            company: "Criptonomia",
            period: "2020 - 2021",
            roles: [
                {
                    title: "Marketing Lead",
                    description: ["Oversaw Product Market Fit, enterprise onboarding, and growth strategies for blockchain-based agreements. Enabled successful blockchain solution deployments for large-scale enterprises."]
                }
            ]
        }
    ],

    // ===== PALESTRAS E TALKS =====
    talks: [
        {
            title: "Onchain Reputation: From Plutocracy to Valocracy (ETH Belgrade 2024)",
            url: "https://www.youtube.com/watch?v=dsqsgt0fLhs"
        },
        {
            title: "Enabling DeFi to be more - Panel (ETH Belgrade 2024)",
            url: "https://www.youtube.com/watch?v=T0nVePr-CCo"
        },
        {
            title: "Governance Security Beyond Code Navigating Political, Social, and Economic Attack Vectors (ETH Denver 2025)",
            url: "https://www.youtube.com/watch?v=LGBIKTSLNLU"
        }
    ],

    // ===== LINKS PARA REDES SOCIAIS =====
    links: [
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/daniela-zschaber/"
        },
        {
            label: "GitHub",
            url: "https://github.com/danimim"
        },
        {
            label: "Twitter",
            url: "https://x.com/danimimm"
        },
        {
            label: "Telegram",
            url: "https://t.me/danimimm"
        }
    ],

    // ===== LISTA DE LEITURA (PASTAS POR TEMA) =====
    reading: [
        {
            folder: "Governance",
            items: [
                {
                    title: "# 43 | First Principles of Crypto Governance",
                    url: "https://dirtroads.substack.com/p/-43-first-principles-of-crypto-governance?utm_source=publication-search"
                },
            ]
        },
        {
            folder: "Philosophy",
            items: [
                {
                    title: "I'm gonna update here soon",
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }
            ]
        },
        {
            folder: "General",
            items: [
                {
                    title: "AI 2027",
                    url: "https://ai-2027.com/"
                },
                {
                    title: "Why Public Goods Matter",
                    url: "https://blog.taho.xyz/public-goods-why-they-matter/"
                },
                {
                    title: "Data Availability Sampling: From Basics to Open Problems",
                    url: "https://www.paradigm.xyz/2022/08/das"
                },
                {
                    title: "Solve the most important problem that you can personally impact",
                    url: "https://invertedpassion.com/solve-important-problems/"
                }
            ]
        }
    ],

    // ===== RECYCLE BIN =====
    recycle: `
    <div class="recycle-item">
      <div class="about-photo">
        <img src="assets/img/sbf.jpg" alt="SBF"
             onerror="this.parentElement.innerHTML='<div class=about-fallback>👤</div>'">
      </div>
    </div>`,

    // ===== SEUS ARTIGOS (PASTAS POR TEMA) =====
    articles: [
        {
            folder: "Web3",
            items: [
                {
                    title: "End-to-End Anticapture: The DAOs You're In Might Be at Risk",
                    url: "https://mirror.xyz/research.blockful.eth/pj6GsEiYZzZQeDqS1WsOZHkNR2jcSybx3V7Q_Zgs0dE"
                },
                {
                    title: "Implications of Onchain Reputation: From Plutocracy to Valocracy",
                    url: "https://mirror.xyz/research.blockful.eth/Ht7raeMRhVNg64X-uHJ3vowmox2Dx8_OPMWVWPnkVyI"
                },
                {
                    title: "A Critique of the Machiavellian Narrative in DAO Governance",
                    url: "https://mirror.xyz/danimim.eth/T7GYtywIH6nksCMYMKYlUdHJMkwnCZRHOSqCNYB18nI"
                }
            ]
        },
        {
            folder: "Thoughts",
            items: [
                {
                    title: "When home doesn’t feel like home anymore",
                    url: "https://medium.com/@dani_zschaber/when-home-doesnt-feel-like-home-anymore-0b117aaadadb"
                }
            ]
        },
        {
            folder: "Career",
            items: [
                {
                    title: "Nothing here yet, I should write more",
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }
            ]
        }
    ],

    // ===== CONFIGURAÇÃO DOS ÍCONES DAS PASTAS =====
    folderIcons: {
        reading: ['gov.png', 'philo.png', 'general.png'],
        articles: ['web3.png', 'thoughts.png', 'career.png']
    },

    // ===== HOBBIES E VIDA PESSOAL =====
    hobbies: `
        <p><strong>☕ Coffee Enthusiast:</strong> I love coffee, please invite me to grab one and yap.</p>
        <br>
        <p><strong>🐾 Cat HR Manager:</strong> I share my life with a team of feline co-workers who supervise everything I do (and occasionally sit on my keyboard).</p>
        <br>
        <p><strong>🥁 Wannabe Drummer:</strong> I love playing the drums… badly. My neighbors deserve a medal.</p>
        <br>
        <p><strong>💿 Vinyl Collector:</strong> I like to believe I was born in the wrong decade and I talk about my vinyls on Instagram.</p>
        <br>
        <p><strong>🌍 Language Nerd:</strong> I speak Russian, French, Portuguese, Spanish, and English. Graduated in Literature at UFMG, still hunting for the next language to fall in love with.</p>
        <br>
        <p><strong>🏝️ Island Life:</strong> I live in southern Brazil, on a paradise island.</p>
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
            bio: "Beloved by everyone, sweet to a fault, but leaves trails of destruction wherever he goes. Runs the office morale program by climbing where he shouldn't."
        },
        {
            name: "Chardonnay – Head of Culinary Acquisitions",
            photo: "assets/img/cats/chardonnay.jpeg", // Crie esta pasta: assets/img/cats/
            bio: "Responsible for testing every snack 24/7. Knows how to sit and give a paw, which she shamelessly uses as a corporate manipulation tactic."
        },
        {
            name: "Kant – Chief Nap & Compliance Officer",
            photo: "assets/img/cats/kant.jpeg", // Crie esta pasta: assets/img/cats/
            bio: "Specializes in long sleeping shifts and terrified of sudden noises but enforces mandatory cuddle policies. Overweight but it's strategic mass."
        }
    ],

    // ===== CONFIGURAÇÃO DO FORMULÁRIO =====
    // Crie conta no formspree.io e cole o endpoint aqui
    // Exemplo: "https://formspree.io/f/abcd1234"
    // Se deixar null, usará mailto como fallback
    FORMSPREE_ENDPOINT: "https://formspree.io/f/xyznkkla",

    // ===== PLAYLIST DO SPOTIFY =====
    // Link para sua playlist (editável no menu Start)
    SPOTIFY_PLAYLIST: "https://open.spotify.com/playlist/0eSQQn2x84pxmIMy4VueMj?si=e1a7435fb0714d93"
};

// Disponibilizar globalmente
window.SITE_DATA = SITE_DATA;

// Debug
console.log('✅ data.js carregado!', SITE_DATA);
