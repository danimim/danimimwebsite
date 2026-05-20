// Check that this file is loading
console.log('Downloading data.js...');

const SITE_DATA = {
    // ===== ABOUT YOU =====
    about: `
        <div class="about-container"">
            <div class="about-photo">
                <img src="assets/img/perfil.png" alt="My photo" onerror="this.parentElement.innerHTML='<div class=about-fallback>👤</div>'">
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

    // ===== PROFESSIONAL EXPERIENCE =====
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

    // ===== TALKS =====
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

    // ===== SOCIAL MEDIA LINKS =====
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

    // ===== READING LIST (FOLDERS BY TOPIC) =====
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
                },
                {
                    title: "The Refusal String Attack",
                    url: "https://clawtom.github.io/tom-blog/2026/03/09/the-refusal-string-attack/"
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

    // ===== MY ARTICLES (FOLDERS BY TOPIC) =====
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
                },
                {
                    title: "Futureswap: The Cost of Unobserved Governance",
                    url: "https://paragraph.com/@blockful/futureswap"
                },
                {
                    title: "Lessons from Arbitrum DAO: The Architecture of Governance",
                    url: "https://paragraph.com/@blockful/arbitrum-security-council"
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

    // ===== FOLDER ICON CONFIGURATION =====
    folderIcons: {
        reading: ['gov.png', 'philo.png', 'general.png'],
        articles: ['web3.png', 'thoughts.png', 'career.png']
    },

    // ===== HOBBIES AND PERSONAL LIFE =====
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

    // ===== MY CATS =====
    cats: [
        {
            name: "Merlot – Chief Executive Diva",
            photo: "assets/img/cats/merlot.jpeg", // Create this folder: assets/img/cats/
            bio: "Runs my entire life with an iron paw. Demands meetings on her schedule only and insists on daily compliments. HR nightmare, but too beautiful to replace."
        },
        {
            name: "Nietzsche – Director of Chaos & Public Relations",
            photo: "assets/img/cats/nietzsche.jpeg", // Create this folder: assets/img/cats/
            bio: "Beloved by everyone, sweet to a fault, but leaves trails of destruction wherever he goes. Runs the office morale program by climbing where he shouldn't."
        },
        {
            name: "Chardonnay – Head of Culinary Acquisitions",
            photo: "assets/img/cats/chardonnay.jpeg", // Create this folder: assets/img/cats/
            bio: "Responsible for testing every snack 24/7. Knows how to sit and give a paw, which she shamelessly uses as a corporate manipulation tactic."
        },
        {
            name: "Kant – Chief Nap & Compliance Officer",
            photo: "assets/img/cats/kant.jpeg", // Create this folder: assets/img/cats/
            bio: "Specializes in long sleeping shifts and terrified of sudden noises but enforces mandatory cuddle policies. Overweight but it's strategic mass."
        }
    ],

    // ===== FORM CONFIGURATION =====
    // Create an account at formspree.io and paste the endpoint here
    // Example: "https://formspree.io/f/abcd1234"
    // If left null, falls back to mailto
    FORMSPREE_ENDPOINT: "https://formspree.io/f/xyznkkla",

    // ===== SPOTIFY PLAYLIST =====
    // Link to your playlist (opened from the Start menu)
    SPOTIFY_PLAYLIST: "https://open.spotify.com/playlist/0eSQQn2x84pxmIMy4VueMj?si=e1a7435fb0714d93",

    // ===== GROOVE CRYPTO CLUB =====
    // Content for the second page at /groove/.
    // Everything below is PLACEHOLDER content — replace it with the real
    // thing whenever you're ready. Image paths are root-absolute (start
    // with "/") because the /groove/ page lives in a subfolder.
    groove: {
        // --- Instagram videos about Crypto & Vinyl ---
        // Drop real thumbnails in assets/img/groove/ and update "thumbnail".
        // If a thumbnail is missing, a fallback play button is shown instead.
        videos: [
            {
                title: "Wish You Were Here, Pink Floyd – The Nixon Shock",
                description: "",
                thumbnail: "/assets/img/groove/video-1.png",
                url: "https://www.instagram.com/"
            },
            {
                title: "Episode 4: The Doors and DAOs",
                description: "",
                thumbnail: "/assets/img/groove/video-2.png",
                url: "https://www.instagram.com/"
            },
            {
                title: "AI Security and Kendrick Lamar",
                description: "",
                thumbnail: "/assets/img/groove/video-3.png",
                url: "https://www.instagram.com/"
            }
        ],
        videosNote: "⚠️ Heads up: the videos above are in Portuguese. 🇧🇷",

        // --- Vinyl collection (also the Turntable's records) ---
        // "youtube" is the audio played on the Turntable: a YouTube video ID,
        // a video URL, or a playlist URL. Records with "" still load on the
        // deck but have no audio.
        vinyl: [
            { artist: "Sade", album: "The Best of Sade", year: "", genre: "", youtube: "tfHZlZ994c0" },
            { artist: "ABBA", album: "Golden Hits", year: "1983", genre: "Pop", youtube: "f0woW91PR1Q" },
            { artist: "Led Zeppelin", album: "The Song Remains the Same (soundtrack)", year: "1976", genre: "Rock", youtube: "FFW-_2-gPEI" },
            { artist: "Jorge Ben Jor", album: "Ao Vivo no Rio (Som Livre)", year: "1991", genre: "MPB", youtube: "https://www.youtube.com/playlist?list=PLkFXovfm9GncJ_hO581iaS1QFrT2xfEyH" },
            { artist: "Trilha Sonora", album: "The Great Gatsby (Nelson Riddle)", year: "1974", genre: "Trilha Sonora", youtube: "rI2_JI4ZL6c" },
            { artist: "Black Sabbath", album: "Paranoid", year: "1970", genre: "Heavy Metal", youtube: "6nImynXu9rg" },
            { artist: "Frank Sinatra", album: "Star Collection", year: "1977", genre: "Jazz/Pop", youtube: "1GA5cJT7jiM" },
            { artist: "Djavan", album: "Luz", year: "1982", genre: "MPB", youtube: "U2Ce-bMkGK8" },
            { artist: "The Cure", album: "Standing on a Beach – The Singles", year: "1986", genre: "Post-punk / New Wave", youtube: "0Y-OUO8JqN8" },
            { artist: "Joy Division", album: "Unknown Pleasures", year: "1979", genre: "Post-punk", youtube: "7J9YtpUCYpI" },
            { artist: "Simply Red", album: "The Best of Simply Red", year: "", genre: "Pop/Soul", youtube: "f8jYslkV-2E" },
            { artist: "Trilha Sonora", album: "Miami Vice II", year: "", genre: "Trilha Sonora", youtube: "lFaWXix-ARA" },
            { artist: "Ten Years After", album: "Ssssh.", year: "1969", genre: "Blues Rock", youtube: "Adgh3bT0BRA" },
            { artist: "A-ha", album: "Stay on These Roads", year: "1988", genre: "Pop", youtube: "gBGXPafi_9s" },
            { artist: "Michael Jackson", album: "Bad", year: "1987", genre: "Pop", youtube: "Odkk1424WP4" },
            { artist: "Kendrick Lamar", album: "Good Kid, M.A.A.D City", year: "2012", genre: "Hip-Hop / Rap", youtube: "y6ubvVJEa_8" },
            { artist: "Pink Floyd", album: "Wish You Were Here", year: "", genre: "", youtube: "lWUKXCp3D00" },
            { artist: "The Police", album: "The Very Best of... Sting & The Police", year: "", genre: "", youtube: "5PtHxV7G-Bs" },
            { artist: "The Doors", album: "L.A. Woman", year: "", genre: "", youtube: "91vU3kHtnoU" },
            { artist: "Fleetwood Mac", album: "Fleetwood Mac", year: "1975", genre: "", youtube: "tpgmlk7OVg4" },
            { artist: "Pink Floyd", album: "Animals", year: "", genre: "", youtube: "7NLQYYnjVyU" },
            { artist: "Hozier", album: "Wasteland, Baby!", year: "", genre: "", youtube: "https://www.youtube.com/playlist?list=PLxA687tYuMWhc69s1hkKQtD_S31y5wrgx" },
            { artist: "J. Cole", album: "Forest Hills Drive", year: "", genre: "", youtube: "https://www.youtube.com/playlist?list=PL19ZmUYeD1WQs5Xa2ArpVlr-o0dV9tsVZ" },
            { artist: "Arctic Monkeys", album: "AM", year: "2013", genre: "", youtube: "https://www.youtube.com/playlist?list=PLOkPWZS9Q7ECOreiaeGJZ_dA8KlCtsvHN" },
            { artist: "Pink Floyd", album: "The Dark Side of the Moon", year: "", genre: "", youtube: "cuKVhVb8VRw" },
            { artist: "Queen", album: "A Kind of Magic", year: "", genre: "", youtube: "zTC-ZJ6-rxg" },
            { artist: "Dire Straits", album: "Brothers in Arms", year: "", genre: "", youtube: "p0D-w-HhB64" },
            { artist: "Sonic Youth", album: "Goo", year: "", genre: "", youtube: "eySTnQt5jCE" }
        ],

        // --- Newsletter ---
        newsletter: {
            intro: "Groove Crypto Club's monthly-ish dispatch — crypto, DAO governance, and the records I'm spinning. (Placeholder copy — replace when ready.)",
            subscribeUrl: "#",
            issues: [
                { title: "Issue #001 — Welcome to the Groove", date: "Coming soon", url: "#" },
                { title: "Issue #002 — Governance & B-sides", date: "Coming soon", url: "#" }
            ]
        },

        // --- About the Groove Crypto Club (PLACEHOLDER) ---
        about: `
            <p><strong>Groove Crypto Club</strong> is where my two obsessions meet:
            crypto and music.</p>
            <p>Placeholder copy — replace this with the real story of the club:
            what it is, why you started it, and what people will find here.</p>
        `,

        // --- Donation wallet ---
        donate: {
            intro: "If my videos or research help you, you can support more of it here. Every contribution funds independent governance research and content. 💜",
            address: "0x81091b9E5D49e264C051d3aeb3023A4C170c6888",
            note: "I accept donations on any EVM-compatible chain — Ethereum, Base, Arbitrum, Optimism, and more."
        }
    },

    // ===== RESUME / CV =====
    // PDF downloaded when the "hire me" desktop icon is clicked
    RESUME: "assets/cv_daniela_zschaber.pdf"
};

// Expose globally
window.SITE_DATA = SITE_DATA;

// Debug
console.log('✅ data.js loaded!', SITE_DATA);
