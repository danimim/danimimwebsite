// Check that this file is loading
console.log('Downloading data.js...');

const SITE_DATA = {
    // ===== ABOUT YOU =====
    about: `
        <div class="about-container"">
            <div class="about-photo">
                <img src="assets/img/perfil.jpg" alt="My photo" onerror="this.parentElement.innerHTML='<div class=about-fallback>👤</div>'">
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
            name: "Merlot, Chief Executive Diva",
            photo: "assets/img/cats/merlot.jpeg", // Create this folder: assets/img/cats/
            bio: "Runs my entire life with an iron paw. Demands meetings on her schedule only and insists on daily compliments. HR nightmare, but too beautiful to replace."
        },
        {
            name: "Nietzsche, Director of Chaos & Public Relations",
            photo: "assets/img/cats/nietzsche.jpeg", // Create this folder: assets/img/cats/
            bio: "Beloved by everyone, sweet to a fault, but leaves trails of destruction wherever he goes. Runs the office morale program by climbing where he shouldn't."
        },
        {
            name: "Chardonnay, Head of Culinary Acquisitions",
            photo: "assets/img/cats/chardonnay.jpeg", // Create this folder: assets/img/cats/
            bio: "Responsible for testing every snack 24/7. Knows how to sit and give a paw, which she shamelessly uses as a corporate manipulation tactic."
        },
        {
            name: "Kant, Chief Nap & Compliance Officer",
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
    // Everything below is PLACEHOLDER content, replace it with the real
    // thing whenever you're ready. Image paths are root-absolute (start
    // with "/") because the /groove/ page lives in a subfolder.
    groove: {
        // --- Instagram videos about Crypto & Vinyl ---
        // Drop real thumbnails in assets/img/groove/ and update "thumbnail".
        // If a thumbnail is missing, a fallback play button is shown instead.
        videos: [
            {
                title: "Wish You Were Here, Pink Floyd, The Nixon Shock",
                description: "",
                thumbnail: "/assets/img/groove/video-1.png",
                url: "https://www.instagram.com/reel/DMtka28xA61wjnLIAyGq6jZkvCKuHHIaMsMoyY0/?igsh=MTExbW15NTY2aGkxdw=="
            },
            {
                title: "The Doors and Centralized Power in DAOs",
                description: "",
                thumbnail: "/assets/img/groove/video-2.png",
                url: "https://www.instagram.com/reel/DOY2m1SDU-hDS9F-fGzV253XRgCEfEmT1WQ0mo0/?igsh=NTZueXl3ejFhZGwz"
            },
            {
                title: "Kendrick Lamar, Money Tree, and AI Security",
                description: "",
                thumbnail: "/assets/img/groove/video-3.png",
                url: "https://www.instagram.com/reel/DYmpQyjuvcR/?igsh=YjZjamNqZjJ5Ynlx"
            }
        ],
        videosNote: "Heads up: the videos above are in Portuguese.",

        // --- Vinyl collection (also the Turntable's records) ---
        // "youtube" is the audio played on the Turntable: a YouTube video ID,
        // a video URL, or a playlist URL. Records with "" still load on the
        // deck but have no audio.
        vinyl: [
            { artist: "Sade", album: "The Best of Sade", year: "1994", genre: "Soul / Sophisti-pop", youtube: "tfHZlZ994c0", cover: "/assets/img/groove/covers/sade-best-of.png" },
            { artist: "ABBA", album: "Golden Hits", year: "1983", genre: "Pop", youtube: "f0woW91PR1Q", cover: "/assets/img/groove/covers/abba-golden-hits.png" },
            { artist: "Led Zeppelin", album: "The Song Remains the Same (soundtrack)", year: "1976", genre: "Rock", youtube: "FFW-_2-gPEI", cover: "/assets/img/groove/covers/led-zeppelin-song-remains.png" },
            { artist: "Jorge Ben Jor", album: "Ao Vivo no Rio (Som Livre)", year: "1991", genre: "MPB", youtube: "https://www.youtube.com/playlist?list=PLkFXovfm9GncJ_hO581iaS1QFrT2xfEyH", cover: "/assets/img/groove/covers/jorge-ben-ao-vivo.png" },
            { artist: "Trilha Sonora", album: "The Great Gatsby (Nelson Riddle)", year: "1974", genre: "Trilha Sonora", youtube: "rI2_JI4ZL6c", cover: "/assets/img/groove/covers/great-gatsby.png" },
            { artist: "Black Sabbath", album: "Paranoid", year: "1970", genre: "Heavy Metal", youtube: "6nImynXu9rg", cover: "/assets/img/groove/covers/black-sabbath-paranoid.png" },
            { artist: "Frank Sinatra", album: "Star Collection", year: "1977", genre: "Jazz/Pop", youtube: "1GA5cJT7jiM", cover: "/assets/img/groove/covers/frank-sinatra-star-collection.png" },
            { artist: "Djavan", album: "Luz", year: "1982", genre: "MPB", youtube: "U2Ce-bMkGK8", cover: "/assets/img/groove/covers/djavan-luz.png" },
            { artist: "The Cure", album: "Standing on a Beach, The Singles", year: "1986", genre: "Post-punk / New Wave", youtube: "0Y-OUO8JqN8", cover: "/assets/img/groove/covers/the-cure-standing-on-a-beach.png" },
            { artist: "Joy Division", album: "Unknown Pleasures", year: "1979", genre: "Post-punk", youtube: "7J9YtpUCYpI", cover: "/assets/img/groove/covers/joy-division-unknown-pleasures.png" },
            { artist: "Simply Red", album: "The Best of Simply Red", year: "1996", genre: "Pop/Soul", youtube: "f8jYslkV-2E", cover: "/assets/img/groove/covers/simply-red-best-of.png" },
            { artist: "Trilha Sonora", album: "Miami Vice II", year: "1986", genre: "Trilha Sonora", youtube: "lFaWXix-ARA", cover: "/assets/img/groove/covers/miami-vice-2.png" },
            { artist: "Ten Years After", album: "Ssssh.", year: "1969", genre: "Blues Rock", youtube: "Adgh3bT0BRA", cover: "/assets/img/groove/covers/ten-years-after-ssssh.png" },
            { artist: "A-ha", album: "Stay on These Roads", year: "1988", genre: "Pop", youtube: "gBGXPafi_9s", cover: "/assets/img/groove/covers/aha-stay-on-these-roads.png" },
            { artist: "Michael Jackson", album: "Bad", year: "1987", genre: "Pop", youtube: "Odkk1424WP4", cover: "/assets/img/groove/covers/michael-jackson-bad.png" },
            { artist: "Kendrick Lamar", album: "Good Kid, M.A.A.D City", year: "2012", genre: "Hip-Hop / Rap", youtube: "y6ubvVJEa_8", cover: "/assets/img/groove/covers/kendrick-lamar-gkmc.png" },
            { artist: "Pink Floyd", album: "Wish You Were Here", year: "1975", genre: "Progressive Rock", youtube: "TMy_mYkwl4M", cover: "/assets/img/groove/covers/pink-floyd-wish-you-were-here.png" },
            { artist: "The Police", album: "The Very Best of... Sting & The Police", year: "1997", genre: "Rock / New Wave", youtube: "5PtHxV7G-Bs", cover: "/assets/img/groove/covers/the-police-very-best.png" },
            { artist: "The Doors", album: "L.A. Woman", year: "1971", genre: "Rock", youtube: "91vU3kHtnoU", cover: "/assets/img/groove/covers/the-doors-la-woman.png" },
            { artist: "Fleetwood Mac", album: "Fleetwood Mac", year: "1975", genre: "Rock", youtube: "tpgmlk7OVg4", cover: "/assets/img/groove/covers/fleetwood-mac.png" },
            { artist: "Pink Floyd", album: "Animals", year: "1977", genre: "Progressive Rock", youtube: "7NLQYYnjVyU", cover: "/assets/img/groove/covers/pink-floyd-animals.png" },
            { artist: "Hozier", album: "Wasteland, Baby!", year: "2019", genre: "Indie Folk / Soul", youtube: "https://www.youtube.com/playlist?list=PLxA687tYuMWhc69s1hkKQtD_S31y5wrgx", cover: "/assets/img/groove/covers/hozier-wasteland-baby.png" },
            { artist: "J. Cole", album: "Forest Hills Drive", year: "2014", genre: "Hip-Hop / Rap", youtube: "https://www.youtube.com/playlist?list=PL19ZmUYeD1WQs5Xa2ArpVlr-o0dV9tsVZ", cover: "/assets/img/groove/covers/j-cole-forest-hills-drive.png" },
            { artist: "Arctic Monkeys", album: "AM", year: "2013", genre: "Indie Rock", youtube: "https://www.youtube.com/playlist?list=PLOkPWZS9Q7ECOreiaeGJZ_dA8KlCtsvHN", cover: "/assets/img/groove/covers/arctic-monkeys-am.png" },
            { artist: "Pink Floyd", album: "The Dark Side of the Moon", year: "1973", genre: "Progressive Rock", youtube: "cuKVhVb8VRw", cover: "/assets/img/groove/covers/pink-floyd-dark-side-of-the-moon.png" },
            { artist: "Queen", album: "A Kind of Magic", year: "1986", genre: "Rock", youtube: "zTC-ZJ6-rxg", cover: "/assets/img/groove/covers/queen-a-kind-of-magic.png" },
            { artist: "Dire Straits", album: "Brothers in Arms", year: "1985", genre: "Rock", youtube: "p0D-w-HhB64", cover: "/assets/img/groove/covers/dire-straits-brothers-in-arms.png" },
            { artist: "Sonic Youth", album: "Goo", year: "1990", genre: "Alternative Rock", youtube: "eySTnQt5jCE", cover: "/assets/img/groove/covers/sonic-youth-goo.png" }
        ],

        // --- Newsletter ---
        newsletter: {
            comingSoon: true,
            intro: "Groove Crypto Club's monthly-ish dispatch, crypto, DAO governance, and the records I'm spinning. (Placeholder copy, replace when ready.)",
            subscribeUrl: "#",
            issues: [
                { title: "Issue #001, Welcome to the Groove", date: "Coming soon", url: "#" },
                { title: "Issue #002, Governance & B-sides", date: "Coming soon", url: "#" }
            ]
        },

        // --- About the Groove Crypto Club ---
        about: `
            <div class="about-container">
                <div class="about-photo">
                    <img src="/assets/img/groove/daniela.jpg" alt="Daniela" onerror="this.parentElement.innerHTML='<div class=about-fallback>🎧</div>'">
                </div>
                <div class="about-text">
                    <p>Hi, I'm Daniela. I created Groove Crypto Club, and I run it from Florianópolis, the Magic Island, though my heart will always be in Belo Horizonte, where I'm from.</p>
                    <p>I've been in crypto since 2018, and this is where I get to share my two biggest passions on video: web3 and vinyl records.</p>
                    <p>It started when people kept asking me to make videos, but I only said yes once I figured out how to do it in a way that genuinely excited me. I never wanted to post just to post. For me it only works if I'm sharing something I truly love.</p>
                    <p>I want this to be a space where vinyl lovers can get curious about crypto and tech, and where crypto people can step away from the screen for a bit, put on a record, and touch some grass.</p>
                    <p>It's also where I share a little of my own story, mostly how I got here, because my life really did change in two ways: crypto pushed me to chase my dreams and actually reach some of them, and vinyl keeps me grounded, pulling me back to reality every time I get lost in the crypto grind.</p>
                </div>
            </div>
        `,

        // --- Donation wallet ---
        donate: {
            intro: "If my videos or research help you, you can support more of it here. Every contribution funds independent governance research and content.",
            address: "0x81091b9E5D49e264C051d3aeb3023A4C170c6888",
            note: "I accept donations on any EVM-compatible chain, like Ethereum, Base, Arbitrum, Optimism, and more."
        }
    },

    // ===== GROWTH (second page at /growth/) =====
    // Vista/Frutiger-Aero themed page. Where the GTM Engineering guide and
    // future growth-engineering write-ups live.
    growth: {
        about: `
            <p><strong>Hi, I'm Daniela.</strong> This is my Growth lab, a space where I learn in public, by doing.</p>
            <p>Ten years in Growth, brand, and ecosystem (with prior roles at Moonwell, Balancer, and Blockful). I know the strategy side of GTM cold. What's new, and where the market is moving fast, is the <strong>engineering side</strong> of GTM: turning intent into automated, AI-augmented workflows that compound.</p>
            <p>This page is where I write down what I'm figuring out as I go: GTM engineering, growth experiments, the meta-loops behind shipped work, and the artifacts I build along the way.</p>
            <p>First article is up, a living document on <strong>how I'm learning GTM Engineering while job-hunting</strong>. Open the <em>Articles</em> window to read it, or click the <em>GTM Engineering</em> shortcut on the desktop.</p>
            <p>If anything here is useful to you, there's a <em>Donate</em> button on the right. It funds more writing like this.</p>
        `,

        articlesIntro: "Living documents and working notes on growth engineering. New posts land here.",

        articles: [
            {
                id: 'gtm-engineering',
                windowId: 'article-gtm',
                title: "How I'm learning GTM Engineering while job-hunting",
                status: 'Living document',
                date: '2026-05-23',
                summary: "A meta-document. The premise: my own job search is the first GTM Engineering project, ICP filter on myself, real CRM of target companies, enrichment in Clay, signals, and outbound, while learning the role on the way in.",
                html: `
<article class="growth-article">
  <header class="article-header">
    <div class="article-meta">
      <span class="meta-pill">Living document</span>
      <span>Last updated: 2026-05-23</span>
      <span>Author: Daniela Zschaber</span>
      <span>Domain: crypto / DeFi / institutional / governance / security</span>
      <span>Mode: learn-by-doing</span>
    </div>
    <h1 class="article-title">How I'm learning GTM Engineering while job-hunting</h1>
    <p class="article-subtitle">A meta-document. The premise: my own job search is the first GTM Engineering project. I run an ICP filter on myself, build a real CRM of target companies, enrich them in Clay, identify signals, and ship outbound, while learning the role on the way in.</p>
  </header>

  <nav class="article-toc">
    <strong>Contents</strong>
    <ol>
      <li><a href="#g-sec-0">Why this document exists</a></li>
      <li><a href="#g-sec-1">The big questions I'm asking</a></li>
      <li><a href="#g-sec-2">What GTM Engineering is</a></li>
      <li><a href="#g-sec-3">The mental model, the four loops</a></li>
      <li><a href="#g-sec-4">The job search as a GTM project</a></li>
      <li><a href="#g-sec-5">Schemas, three diagrams</a></li>
      <li><a href="#g-sec-6">Curriculum</a></li>
      <li><a href="#g-sec-7">Materials I've collected</a></li>
      <li><a href="#g-sec-8">Tools, the stack</a></li>
      <li><a href="#g-sec-9">Open questions</a></li>
      <li><a href="#g-sec-10">The 30-day plan</a></li>
      <li><a href="#g-sec-11">Quick hyperlink index</a></li>
      <li><a href="#g-sec-12">The principle behind it</a></li>
    </ol>
  </nav>

  <section class="article-section" id="g-sec-0">
    <h2>0. Why this document exists</h2>
    <p>I have ten years in Growth, brand, and ecosystem (with prior roles at Moonwell, Balancer, and Blockful). I know the strategy side of GTM cold. What's new, and where the market is moving fast, is the engineering side of GTM: turning intent into automated, AI-augmented workflows that compound.</p>
    <p>This is the living guide I'm building for myself. It captures:</p>
    <ul>
      <li>the big questions I'm asking</li>
      <li>the mental model behind the role (data → signal → enrichment → action)</li>
      <li>the resources I'm working through (Clay, Maven, GTM Index)</li>
      <li>the tools I'm experimenting with</li>
      <li>the materials I've collected in conversation (Pierson Marks' Google Ads Skill, job postings, VC boards)</li>
    </ul>
    <p>If you're a GTM leader who learned by doing, this is the doc I wish I'd had at week one.</p>
  </section>

  <section class="article-section" id="g-sec-1">
    <h2>1. The big questions I'm asking</h2>
    <p>Five questions I keep returning to. The whole guide is structured around them.</p>
    <div class="table-wrap"><table>
      <thead><tr><th>#</th><th>Question</th><th>Why it matters</th></tr></thead>
      <tbody>
        <tr><td>Q1</td><td>What is a GTM Engineer, actually, and how is it different from RevOps / Growth Marketing / SDR-leader?</td><td>The title is hot but vague, I need a sharp definition before I can position myself or hire one.</td></tr>
        <tr><td>Q2</td><td>How did Clay "mint" this role, and why?</td><td>Clay manufactured a new category around the product. Understanding the playbook teaches both GTM and category design.</td></tr>
        <tr><td>Q3</td><td>What are the thinking processes (not just tools) that separate a good GTM Engineer from a fancy automator?</td><td>Tools change every quarter. The thinking is the moat.</td></tr>
        <tr><td>Q4</td><td>Can I treat my own job search as a GTM Engineering project, and use it as my portfolio artifact?</td><td>Hiring managers want shipped workflows with documented ROI. The job search is the most defensible portfolio I can ship right now.</td></tr>
        <tr><td>Q5</td><td>Where is the role going next (agentic AI, MCP, vertical RevOps)?</td><td>I want to skate where the puck is going, especially given my DeFi/institutional network.</td></tr>
      </tbody>
    </table></div>
  </section>

  <section class="article-section" id="g-sec-2">
    <h2>2. What GTM Engineering is (and how Clay minted it)</h2>

    <h3>2.1 Working definition</h3>
    <p>A GTM Engineer is the person who turns the go-to-market funnel into a system of programmable workflows, combining customer data, enrichment, AI, and orchestration tools to do what an SDR team, an analyst, and an ops manager used to do separately, at a fraction of the cost and far higher precision.</p>
    <blockquote class="callout">In one sentence: <em>revenue-aware software engineering applied to outbound, expansion, and lifecycle.</em></blockquote>

    <h3>2.2 How Clay minted the role</h3>
    <p>This is one of the best category-design plays of the last five years. The pattern:</p>
    <ol>
      <li><strong>Build a tool that's hard to categorize</strong>, Clay is part spreadsheet, part enrichment API aggregator, part AI agent platform.</li>
      <li><strong>Name the persona that uses it well</strong>, "GTM Engineer".</li>
      <li><strong>Make that name a status symbol</strong>, Clay University, certifications, cohorts, "GTM Engineer of the Year".</li>
      <li><strong>Seed it through agencies and consultants</strong>, turn power users into evangelists who sell the role into enterprises.</li>
      <li><strong>Let recruiters learn the term from the consultants</strong>, and now every B2B startup has "GTM Engineer" in their JDs.</li>
    </ol>
    <p>The role didn't exist meaningfully in 2022. By 2026 it's a line item on every modern revenue org chart. That's the playbook to study, alongside the tool itself.</p>
    <p class="reference"><strong>Reference reading:</strong> <a href="https://clay.com/blog/gtm-engineering" target="_blank" rel="noopener">Clay's own definition, GTM Engineering: What It Is and How to Hire in 2026</a></p>

    <h3>2.3 What Clay (the product) actually does</h3>
    <p>A compact mental model:</p>
    <div class="aero-pipeline">
      <div class="aero-pipeline-input">
        <div class="aero-pipeline-title">Trigger / Intent</div>
        <ul>
          <li>companies, domains, contacts</li>
          <li>LinkedIn URLs, RSS</li>
          <li>intent signals</li>
        </ul>
      </div>
      <div class="aero-pipeline-arrow" aria-hidden="true">&rarr;</div>
      <div class="aero-pipeline-engine">
        <div class="aero-pipeline-engine-title">Clay table</div>
        <div class="aero-pipeline-engine-grid">
          <div class="cell-head">inputs</div>
          <div class="cell-head">recipe</div>
          <div>HTTP &middot; Apollo &middot; Clearbit &middot; ZoomInfo</div>
          <div>AI Prompt &middot; Find-Person</div>
        </div>
      </div>
      <div class="aero-pipeline-arrow" aria-hidden="true">&rarr;</div>
      <div class="aero-pipeline-output">
        <div class="aero-pipeline-title">Enriched record</div>
        <ul>
          <li>outbound email</li>
          <li>CRM update</li>
          <li>Slack alert</li>
          <li>HubSpot / Salesforce</li>
          <li>Notion / Sheet</li>
          <li>another Clay table</li>
        </ul>
      </div>
    </div>
    <p>The unit of work is a Clay table where every row is an entity (account, person, deal) and every column is either an input, an enrichment, an AI step, or an output destination. Hundreds of integrations sit behind those columns.</p>
    <p><strong>Why it matters for the role:</strong> Clay isn't only the tool, it's the schema that GTM Engineers use to think. Once you internalize <em>table-as-pipeline</em>, the entire job becomes designing tables that compose into systems.</p>
    <p>→ Live: <a href="https://clay.com" target="_blank" rel="noopener">clay.com</a> · <a href="https://university.clay.com" target="_blank" rel="noopener">Clay University</a> · <a href="https://university.clay.com/courses/clay-101" target="_blank" rel="noopener">Clay 101 (free)</a></p>
  </section>

  <section class="article-section" id="g-sec-3">
    <h2>3. The mental model, the four loops of GTM Engineering</h2>
    <p>The role lives at the intersection of four feedback loops. Mastering the role = being fluent in all four.</p>
    <div class="aero-flow">
      <div class="aero-flow-card">
        <div class="aero-flow-title">ICP definition</div>
        <div class="aero-flow-note">strategy, marketing, founder</div>
      </div>
      <div class="aero-flow-arrow"><span>who counts as a target?</span></div>
      <div class="aero-flow-card">
        <div class="aero-flow-title">Signal detection &amp; sourcing</div>
        <div class="aero-flow-note">intent data, hiring posts, news, open-source contributions, funding</div>
      </div>
      <div class="aero-flow-arrow"><span>who is in-market right now?</span></div>
      <div class="aero-flow-card">
        <div class="aero-flow-title">Enrichment &amp; scoring</div>
        <div class="aero-flow-note">Clay, Apollo, Clearbit, AI prompts, proprietary heuristics</div>
      </div>
      <div class="aero-flow-arrow"><span>who deserves a touch this week?</span></div>
      <div class="aero-flow-card">
        <div class="aero-flow-title">Action / activation</div>
        <div class="aero-flow-note">outbound email, ABM ad, BD intro, partnership note, calendar invite</div>
      </div>
      <div class="aero-flow-arrow"><span>measure &rarr; attribute &rarr; learn &rarr; loop back to ICP &amp; Signals</span></div>
    </div>
    <p>Each loop has its own discipline:</p>
    <ul>
      <li><strong>ICP</strong>, the marketing/strategy mind: who, why, value, segment.</li>
      <li><strong>Signal</strong>, the analytical mind: triggers, intent data, scraping, RSS, web hooks.</li>
      <li><strong>Enrichment</strong>, the data-engineer mind: APIs, joins, scoring, deduping, schema design.</li>
      <li><strong>Activation</strong>, the copywriter/operator mind: tone, sequence, calendar, deliverability, attribution.</li>
    </ul>
    <p>A great GTM Engineer is literate in all four and writes code, prompts, or SQL when the off-the-shelf tools run out.</p>
  </section>

  <section class="article-section" id="g-sec-4">
    <h2>4. The job search as a GTM Engineering project</h2>
    <p>This is the meta-loop. I'm running my own search as if I were the SDR of myself. Every step has a 1:1 mapping to GTM Engineering practice.</p>
    <div class="table-wrap"><table>
      <thead><tr><th>Job-search step (mine)</th><th>GTM-Engineering equivalent</th><th>Tool I used</th></tr></thead>
      <tbody>
        <tr><td>Define what a fit role looks like (remote, LATAM-eligible, Growth/governance/security, DeFi/institutional)</td><td>Define the ICP</td><td>a spec doc; my own CV as the buyer-persona inverse</td></tr>
        <tr><td>Pull a list of crypto companies hiring</td><td>Build an account list</td><td>Web search across job boards + VC portfolio boards</td></tr>
        <tr><td>Filter to "open NOW, region-eligible, posted &lt; 30 days, role fit"</td><td>Apply ICP signals + intent filters</td><td>A spreadsheet with an APPLY NOW (filtered) view</td></tr>
        <tr><td>Enrich each company (size, funding, growth team, key contacts)</td><td>Clay enrichment pass</td><td>Clay find-and-enrich-company for ~11 highest-fit targets</td></tr>
        <tr><td>Identify decision-makers and warm intros</td><td>Build the contact layer</td><td>Clay contacts response, names, titles, and likely warm-intro paths</td></tr>
        <tr><td>Apply / send a warm note</td><td>Activation</td><td>Direct links + LinkedIn warm intros</td></tr>
        <tr><td>Track status (Applied / Rejected / Watch / Closed)</td><td>CRM-like pipeline</td><td>Tracker tab Targets + the filtered tab + posting recency</td></tr>
        <tr><td>Re-run weekly with fresh openings</td><td>Build the routine</td><td>Schedulable task; eventually a Clay → Slack flow</td></tr>
      </tbody>
    </table></div>
    <p><strong>The artifact:</strong> the spreadsheet I built during this session, with APPLY NOW (filtered), Targets, Boards to mine, and Summary tabs, is literally a small Clay-style GTM pipeline, built in a spreadsheet because I don't have a Clay seat yet. When I get one, I'll port it. That's my first GTM-Engineering portfolio piece.</p>
  </section>

  <section class="article-section" id="g-sec-5">
    <h2>5. Schemas, three diagrams I keep in mind</h2>

    <h3>5.1 GTM Engineer competency stack</h3>
    <div class="aero-stack">
      <div class="aero-stack-row level-4">
        <span class="level-label">LEVEL 4</span>
        <span class="level-title">Category design &middot; cross-functional GTM</span>
        <span class="level-note">where Clay itself plays</span>
      </div>
      <div class="aero-stack-row level-3">
        <span class="level-label">LEVEL 3</span>
        <span class="level-title">Orchestration &amp; agents (MCP, n8n, Claude)</span>
        <span class="level-note">the "engineer" verb</span>
      </div>
      <div class="aero-stack-row level-2">
        <span class="level-label">LEVEL 2</span>
        <span class="level-title">Data plumbing: enrichment, scoring, dedup</span>
        <span class="level-note">Clay, Apollo, Clearbit</span>
      </div>
      <div class="aero-stack-row level-1">
        <span class="level-label">LEVEL 1</span>
        <span class="level-title">GTM literacy: ICP, segments, funnels, messaging, attribution</span>
        <span class="level-note">decade of Growth = covered</span>
      </div>
    </div>
    <p>My honest self-assessment: Level 1 strong, Level 2 intermediate, Level 3 actively learning, Level 4 strategic understanding. The leverage is in Levels 2 and 3.</p>

    <h3>5.2 The "Clay row" mental schema</h3>
    <div class="aero-tree">
      <div class="aero-tree-root">ROW = ENTITY</div>
      <ul class="aero-tree-branches">
        <li><strong>input columns</strong> &rarr; domain, LinkedIn URL, name, segment</li>
        <li><strong>enrichment columns</strong> &rarr; headcount, funding, tech stack, open jobs, news</li>
        <li><strong>derived columns</strong> &rarr; score, fit-tier, AI summary, sequence-pick</li>
        <li><strong>output columns</strong> &rarr; write to CRM, send email, post to Slack, branch to next table</li>
      </ul>
    </div>
    <p>Every workflow I design from now on, I sketch it as a table first.</p>

    <h3>5.3 Weekly cadence (where the discipline lives)</h3>
    <div class="aero-week">
      <div class="aero-day">
        <div class="aero-day-name">Mon</div>
        <div class="aero-day-task">refresh signal feed: new job posts, funding news, hiring posts</div>
      </div>
      <div class="aero-day">
        <div class="aero-day-name">Tue</div>
        <div class="aero-day-task">enrich any new accounts; score; promote top 10</div>
      </div>
      <div class="aero-day">
        <div class="aero-day-name">Wed</div>
        <div class="aero-day-task">build/refine one new automation (Clay table, prompt, or agent)</div>
      </div>
      <div class="aero-day">
        <div class="aero-day-name">Thu</div>
        <div class="aero-day-task">ship activation: 25 outbound touches OR 3 warm intros</div>
      </div>
      <div class="aero-day">
        <div class="aero-day-name">Fri</div>
        <div class="aero-day-task">audit: what worked, what didn't, what to delete</div>
      </div>
      <div class="aero-day weekend">
        <div class="aero-day-name">Sat</div>
        <div class="aero-day-task">learn: one Clay University module or one Maven session</div>
      </div>
      <div class="aero-day weekend">
        <div class="aero-day-name">Sun</div>
        <div class="aero-day-task">rest, or read GTM Index</div>
      </div>
    </div>
  </section>

  <section class="article-section" id="g-sec-6">
    <h2>6. Curriculum, what I'm working through (and in what order)</h2>
    <p>I'm doing a "free first, then paid where the portfolio artifact justifies it" path.</p>

    <h3>6.1 Free, start here</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Resource</th><th>Why I'm doing it</th><th>Link</th></tr></thead>
      <tbody>
        <tr><td>Clay 101 (Clay University)</td><td>The canonical free intro. Tells me how Clay (and the role) sees the world.</td><td><a href="https://university.clay.com/courses/clay-101" target="_blank" rel="noopener">university.clay.com/courses/clay-101</a></td></tr>
        <tr><td>Clay blog, "GTM Engineering: What It Is and How to Hire in 2026"</td><td>Read it once for content, twice for the category-design craft.</td><td><a href="https://clay.com/blog/gtm-engineering" target="_blank" rel="noopener">clay.com/blog/gtm-engineering</a></td></tr>
        <tr><td>The GTM Index, Best Resources for GTM Engineers</td><td>Hand-curated, updated quarterly. Excellent breadth scan.</td><td><a href="https://thegtmindex.com/gtm-engineers" target="_blank" rel="noopener">thegtmindex.com/gtm-engineers</a></td></tr>
        <tr><td>YouTube, "Everything You Need To Know To Become a GTM Engineer (Clay)"</td><td>1-hour overview before committing money.</td><td><a href="https://youtube.com/watch?v=HIrhiAJY3XU" target="_blank" rel="noopener">youtube.com/watch?v=HIrhiAJY3XU</a></td></tr>
        <tr><td>The Signal, "How to Become a GTM Engineer (8 resources)"</td><td>Compact reading list.</td><td><a href="https://thesignal.club/p/how-to-become-a-gtm-engineer-8-resources" target="_blank" rel="noopener">thesignal.club</a></td></tr>
        <tr><td>syncGTM, Best GTM Courses in 2026</td><td>Comparison piece, useful before paying for any course.</td><td><a href="https://syncgtm.com/blog/best-gtm-courses-2026" target="_blank" rel="noopener">syncgtm.com</a></td></tr>
      </tbody>
    </table></div>

    <h3>6.2 Paid, once the free tier feels easy</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Resource</th><th>Format</th><th>Why</th><th>Link</th></tr></thead>
      <tbody>
        <tr><td>Maven, GTM Engineer Foundations (Yash Tekriwal &amp; Bhaumik Patel)</td><td>6-week live cohort</td><td>Strongest portfolio artifact: shipped automations with documented ROI + a capstone demo.</td><td><a href="https://maven.com/atrium-academy/gtm-engineer-foundations" target="_blank" rel="noopener">maven.com</a></td></tr>
        <tr><td>Maven, For GTM Engineers (course index)</td><td>Aggregated</td><td>Cohort calendar, pick one based on timing.</td><td><a href="https://maven.com/courses/for-gtm-engineers" target="_blank" rel="noopener">maven.com</a></td></tr>
        <tr><td>Maven, AI GTM Engineering Bootcamp (Jack Brown &amp; Kish Sachdeva)</td><td>Bootcamp</td><td>Targets first GTM Engineering job, fits my pivot.</td><td><a href="https://maven.com/ai-with-3plus1-ai/ai-gtm-eng-bootcamp" target="_blank" rel="noopener">maven.com</a></td></tr>
        <tr><td>Maven, AI GTM Engineering Certification (Manu Jayawardana &amp; Aki Wijesundara)</td><td>Cert</td><td>Weekly project format → agentic GTM workflows by week 4.</td><td><a href="https://maven.com/theaiinternship/gtm-engineering-certification" target="_blank" rel="noopener">maven.com</a></td></tr>
        <tr><td>Clay Bootcamp, Full Stack GTM Engineers</td><td>Premium 1:1</td><td>Mentorship from top agency CEOs. Highest signal, highest cost.</td><td><a href="https://claybootcamp.com" target="_blank" rel="noopener">claybootcamp.com</a></td></tr>
        <tr><td>Clay Cohorts (Clay University)</td><td>Live</td><td>Official Clay-led cohorts, closest to "from the source".</td><td><a href="https://university.clay.com/cohorts" target="_blank" rel="noopener">university.clay.com/cohorts</a></td></tr>
        <tr><td>GTM Engineer School</td><td>Live sessions</td><td>Smaller community alternative.</td><td><a href="https://gtm-engineer-school.com" target="_blank" rel="noopener">gtm-engineer-school.com</a></td></tr>
        <tr><td>Udemy, GTM Engineering B2B Playbook: Learn Clay from Scratch</td><td>Self-paced</td><td>Cheap, hands-on, good if I want a second angle.</td><td><a href="https://udemy.com/course/the-gtm-engineering-b2b-playbook-learn-clay-gui-stetelle" target="_blank" rel="noopener">udemy.com</a></td></tr>
      </tbody>
    </table></div>
    <p class="reference"><strong>Decision rule:</strong> pick one live cohort (probably GTM Engineer Foundations on Maven) once I've shipped two Clay tables of my own.</p>
  </section>

  <section class="article-section" id="g-sec-7">
    <h2>7. Materials I've collected in this conversation</h2>
    <p>These are the artifacts already in my hands, and how each maps to GTM Engineering practice.</p>

    <h3>7.1 Pierson Marks, google-search-ads-builder (Claude Skill)</h3>
    <p>A reference implementation of "GTM Engineering applied to paid acquisition", and one of the cleanest examples I've seen of the new MCP-driven workflow design.</p>
    <ul>
      <li><strong>What it is:</strong> a Claude Skill that builds end-to-end Google Search Ads campaigns from your codebase + ICP data + PostHog conversion attribution.</li>
      <li><strong>Why it's exemplary:</strong>
        <ul>
          <li>Treats the codebase + ICP file + PostHog as the source of truth, not the ad platform.</li>
          <li>Bypasses Google's read-only MCP by generating import-ready CSVs and letting the human be the write API.</li>
          <li>Optimizes against the company's own definition of value (e.g. <code>subscription_active_30d</code>), not Google's surface metric.</li>
        </ul>
      </li>
      <li><strong>GTM-Engineering principles I'm extracting:</strong>
        <ul>
          <li><strong>Own your conversion definition</strong>, never let the ad platform decide what "good" means.</li>
          <li><strong>Human-in-the-loop write paths</strong>, pause-by-default, ship CSVs, let a person flip the switch.</li>
          <li><strong>Composability over integration</strong>, PostHog + Clay + a model + a CSV beats a single suite.</li>
        </ul>
      </li>
    </ul>
    <p class="reference">Link: <a href="https://github.com/piersonmarks/google-search-ads-builder" target="_blank" rel="noopener">github.com/piersonmarks/google-search-ads-builder</a></p>

    <h3>7.2 The CV as an ICP filter</h3>
    <p>I use my own CV the way GTM Engineers use a buyer-persona doc, except inverted. Where most GTM specs describe who the customer is, mine describes what I bring, the themes, the wins, the network. That document becomes the filter I run roles through: which jobs actually fit the value I ship?</p>
    <p><a class="btn btn-sm" href="/" rel="noopener">CV on danimim.xyz &rarr;</a></p>

    <h3>7.3 The artifact stack</h3>
    <p>The artifact I built side-by-side with this guide is essentially a small CRM, structured the way a Clay table would be, built in a spreadsheet until I have a Clay seat to port it to. Four tabs:</p>
    <ul>
      <li><strong>APPLY NOW (filtered)</strong>, open roles, region-eligible, posted recently (the "critical filter" view)</li>
      <li><strong>Targets</strong>, the full database with status (New / Applied / Rejected)</li>
      <li><strong>Boards to mine</strong>, VC portfolio + region-focused VC boards, with search prompts</li>
      <li><strong>Summary</strong>, pipeline counts</li>
    </ul>
    <p>On top of that, a Clay enrichment pass on the highest-fit accounts, contacts surfaced, task IDs persistent so I can re-open and extend the workflow. And a list of direct posting links (the canonical URL on each ATS, not the company landing page) so the apply step is one click.</p>

    <h3>7.4 ATS / board patterns I learned to ingest</h3>
    <p>Every one of these taught me something about how a real GTM pipeline ingests "open role" data.</p>
    <div class="table-wrap"><table>
      <thead><tr><th>ATS / Board</th><th>What it taught me about ingest</th></tr></thead>
      <tbody>
        <tr><td>Lever</td><td>Clean direct-posting URLs (/&lt;company&gt;/&lt;uuid&gt;) &rarr; easy to scrape.</td></tr>
        <tr><td>Applicant AI</td><td>Page reliably reports "no open jobs" &rarr; good as a closed-detector.</td></tr>
        <tr><td>Ashby</td><td>JS-rendered &rarr; need a browser tool, not <code>fetch</code>.</td></tr>
        <tr><td>Greenhouse (often wrapped)</td><td><code>gh_jid</code> is the canonical job ID; many companies wrap Greenhouse on their careers page.</td></tr>
        <tr><td>Getro (VC portfolio boards)</td><td>Most VC portfolio boards are Getro &rarr; same DOM &rarr; one scraper hits dozens.</td></tr>
      </tbody>
    </table></div>
  </section>

  <section class="article-section" id="g-sec-8">
    <h2>8. Tools, the stack I'm building literacy in</h2>

    <h3>8.1 Core (must be fluent)</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Tool</th><th>Role in the stack</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Clay</td><td>The orchestration table, accounts/contacts/enrichments/outputs</td><td>Learning, MCP wired in this session</td></tr>
        <tr><td>LinkedIn Sales Navigator</td><td>The richest people-data source for B2B</td><td>Have access, need to script with Clay</td></tr>
        <tr><td>Apollo / Clearbit / ZoomInfo</td><td>Enrichment APIs</td><td>Background, used through Clay</td></tr>
        <tr><td>HubSpot / Salesforce</td><td>System of record</td><td>Familiar from Moonwell / Balancer</td></tr>
        <tr><td>Slack</td><td>Activation + alerting endpoint</td><td>Daily-driver</td></tr>
      </tbody>
    </table></div>

    <h3>8.2 Engineering layer (the "engineer" half of the role)</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Tool</th><th>Role</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>OpenAI / Anthropic APIs (Claude, GPT)</td><td>Inline AI columns, summarization, classification</td><td>Replaces 80% of manual research</td></tr>
        <tr><td>MCP servers (Model Context Protocol)</td><td>Standardized tool layer for LLM-driven workflows</td><td>The future of agentic GTM</td></tr>
        <tr><td>n8n / Zapier / Make</td><td>Glue between systems when Clay isn't enough</td><td>Used as escape hatch</td></tr>
        <tr><td>PostHog / Mixpanel / Amplitude</td><td>Product-side truth on what "value" really means</td><td>Pairs with Clay for full-funnel</td></tr>
        <tr><td>GitHub</td><td>Where serious GTM-Eng workflows now live (see Pierson's skill)</td><td>Source-controlled GTM is the trend</td></tr>
        <tr><td>Notion / Coda</td><td>Workflow docs + dashboards</td><td>Documentation layer</td></tr>
      </tbody>
    </table></div>

    <h3>8.3 Job-search-specific tools (this session's stack)</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Tool</th><th>Used for</th></tr></thead>
      <tbody>
        <tr><td>Clay (MCP)</td><td>Enriching target companies + surfacing contacts</td></tr>
        <tr><td>Web search + web fetch</td><td>Job board mining, posting validation</td></tr>
        <tr><td>VC portfolio job boards</td><td>Polychain / a16z crypto / Valor / TheVentureCity portfolio boards as a source for accounts</td></tr>
        <tr><td>Google Drive (read/index)</td><td>Locating CVs, cover letters, contracts</td></tr>
        <tr><td>Excel / openpyxl</td><td>Building the tracker until I port it to Clay</td></tr>
      </tbody>
    </table></div>
  </section>

  <section class="article-section" id="g-sec-9">
    <h2>9. Questions I keep open for the role</h2>
    <p>These are the ones I'll bring to the first cohort instructor / mentor.</p>
    <ol>
      <li><strong>How do GTM Engineers split work with RevOps?</strong> Where does one start and the other end inside a 50 to 200-person crypto company?</li>
      <li><strong>How is the role priced?</strong> Salary band, equity, contract-vs-FTE, especially for senior people coming from Growth, not from engineering.</li>
      <li><strong>What's the right portfolio?</strong> Is it 3 polished Clay tables? A weekly Loom of a workflow? A public GitHub of skills?</li>
      <li><strong>Where does the role land in DeFi specifically?</strong> Most case studies are SaaS B2B, I want to be the one writing the DeFi/institutional case study.</li>
      <li><strong>How agentic should the workflow be?</strong> Where does "human-in-the-loop" stay, and where do agents fully own a column?</li>
    </ol>
  </section>

  <section class="article-section" id="g-sec-10">
    <h2>10. The 30-day plan</h2>
    <p>A concrete, finishable horizon.</p>

    <h3>Week 1, orient</h3>
    <ul>
      <li>Finish Clay 101.</li>
      <li>Read Clay's GTM Engineering post twice (content + craft).</li>
      <li>Skim The GTM Index and bookmark 3 newsletters.</li>
    </ul>

    <h3>Week 2, build #1</h3>
    <ul>
      <li>Build the first real Clay table: my target-companies list, ported from the spreadsheet.</li>
      <li>Add enrichment columns: headcount, funding, recent news, growth team contact.</li>
      <li>Output: a Slack alert when a target company opens a remote Growth/governance/security role.</li>
    </ul>

    <h3>Week 3, build #2</h3>
    <ul>
      <li>Build a second Clay table: warm-intro radar, people I know within 2 degrees of any target company.</li>
      <li>AI column: draft a 5-sentence warm-intro request.</li>
      <li>Output: weekly digest of best 3 intro candidates.</li>
    </ul>

    <h3>Week 4, commit</h3>
    <ul>
      <li>Apply to one cohort (Maven GTM Engineer Foundations is the leading pick).</li>
      <li>Publish a write-up of the two Clay tables on my danimim.xyz, that's the portfolio.</li>
      <li>Bring the writeup to interviews.</li>
    </ul>
  </section>

  <section class="article-section" id="g-sec-11">
    <h2>11. Quick hyperlink index</h2>
    <p>For copy-paste convenience.</p>

    <h3>Clay</h3>
    <ul>
      <li><a href="https://clay.com" target="_blank" rel="noopener">Clay (product)</a></li>
      <li><a href="https://university.clay.com" target="_blank" rel="noopener">Clay University (home)</a></li>
      <li><a href="https://university.clay.com/courses/clay-101" target="_blank" rel="noopener">Clay 101, free</a></li>
      <li><a href="https://university.clay.com/cohorts" target="_blank" rel="noopener">Clay cohorts</a></li>
      <li><a href="https://claybootcamp.com" target="_blank" rel="noopener">Clay Bootcamp (premium)</a></li>
      <li><a href="https://clay.com/blog/gtm-engineering" target="_blank" rel="noopener">Clay blog, GTM Engineering</a></li>
    </ul>

    <h3>Courses</h3>
    <ul>
      <li><a href="https://maven.com/atrium-academy/gtm-engineer-foundations" target="_blank" rel="noopener">Maven, GTM Engineer Foundations</a></li>
      <li><a href="https://maven.com/courses/for-gtm-engineers" target="_blank" rel="noopener">Maven, For GTM Engineers (course index)</a></li>
      <li><a href="https://maven.com/ai-with-3plus1-ai/ai-gtm-eng-bootcamp" target="_blank" rel="noopener">Maven, AI GTM Engineering Bootcamp</a></li>
      <li><a href="https://maven.com/theaiinternship/gtm-engineering-certification" target="_blank" rel="noopener">Maven, AI GTM Engineering Certification</a></li>
      <li><a href="https://gtm-engineer-school.com" target="_blank" rel="noopener">GTM Engineer School</a></li>
      <li><a href="https://udemy.com/course/the-gtm-engineering-b2b-playbook-learn-clay-gui-stetelle" target="_blank" rel="noopener">Udemy, GTM Engineering B2B Playbook</a></li>
    </ul>

    <h3>Reading</h3>
    <ul>
      <li><a href="https://thegtmindex.com/gtm-engineers" target="_blank" rel="noopener">The GTM Index, Best Resources for GTM Engineers</a></li>
      <li><a href="https://thesignal.club/p/how-to-become-a-gtm-engineer-8-resources" target="_blank" rel="noopener">The Signal, How to become a GTM Engineer (8 resources)</a></li>
      <li><a href="https://syncgtm.com/blog/best-gtm-courses-2026" target="_blank" rel="noopener">syncGTM, Best GTM Courses 2026</a></li>
      <li><a href="https://youtube.com/watch?v=HIrhiAJY3XU" target="_blank" rel="noopener">YouTube, Become a GTM Engineer (Clay)</a></li>
    </ul>

    <h3>Reference implementations from this conversation</h3>
    <ul>
      <li><a href="https://github.com/piersonmarks/google-search-ads-builder" target="_blank" rel="noopener">Pierson Marks, google-search-ads-builder (Claude Skill)</a></li>
      <li>Polychain Capital, portfolio job board (Getro)</li>
      <li>a16z crypto, portfolio jobs</li>
      <li>Valor Capital, LATAM-focused board</li>
    </ul>
  </section>

  <section class="article-section" id="g-sec-12">
    <h2>12. The principle behind the whole thing</h2>
    <blockquote class="callout">"Treat go-to-market as a system, not a personality."</blockquote>
    <p>Tools change every quarter. The discipline of writing down the ICP, instrumenting the signals, owning the enrichment schema, and shipping the activation loop, that's the durable skill. GTM Engineering is what you get when an operator who already understands Growth picks up a keyboard.</p>
    <p>That's where I'm going.</p>
    <p class="reference"><em>Last edit: end of a long session where the spreadsheet artifact and this guide were built side-by-side, the spreadsheet is the proof, this doc is the plan.</em></p>
  </section>
</article>
                `
            }
        ],

        upcoming: [
            { title: "Clay table #1, target-companies write-up", summary: "Once the first portfolio table ships, the write-up lands here." },
            { title: "Clay table #2, warm-intro radar", summary: "AI-drafted intro requests, ranked by signal." }
        ],

        resourcesIntro: "The curriculum I'm working through. Free first, paid once the free tier feels easy.",
        resources: [
            {
                category: "Free, start here",
                items: [
                    { title: "Clay 101 (Clay University)", desc: "The canonical free intro. How Clay (and the role) sees the world.", url: "https://university.clay.com/courses/clay-101" },
                    { title: "Clay blog, GTM Engineering: What It Is and How to Hire in 2026", desc: "Read it once for content, twice for the category-design craft.", url: "https://clay.com/blog/gtm-engineering" },
                    { title: "The GTM Index, Best Resources for GTM Engineers", desc: "Hand-curated, updated quarterly.", url: "https://thegtmindex.com/gtm-engineers" },
                    { title: "YouTube, Become a GTM Engineer (Clay)", desc: "1-hour overview before committing money.", url: "https://youtube.com/watch?v=HIrhiAJY3XU" },
                    { title: "The Signal, How to Become a GTM Engineer (8 resources)", desc: "Compact reading list.", url: "https://thesignal.club/p/how-to-become-a-gtm-engineer-8-resources" },
                    { title: "syncGTM, Best GTM Courses in 2026", desc: "Comparison piece, useful before paying.", url: "https://syncgtm.com/blog/best-gtm-courses-2026" }
                ]
            },
            {
                category: "Paid, once the free tier feels easy",
                items: [
                    { title: "Maven, GTM Engineer Foundations", desc: "6-week live cohort. Strongest portfolio artifact.", url: "https://maven.com/atrium-academy/gtm-engineer-foundations" },
                    { title: "Maven, For GTM Engineers (course index)", desc: "Cohort calendar.", url: "https://maven.com/courses/for-gtm-engineers" },
                    { title: "Maven, AI GTM Engineering Bootcamp", desc: "Targets first GTM Engineering job.", url: "https://maven.com/ai-with-3plus1-ai/ai-gtm-eng-bootcamp" },
                    { title: "Maven, AI GTM Engineering Certification", desc: "Weekly project format → agentic GTM workflows.", url: "https://maven.com/theaiinternship/gtm-engineering-certification" },
                    { title: "Clay Bootcamp, Full Stack GTM Engineers", desc: "Premium 1:1 mentorship from top agency CEOs.", url: "https://claybootcamp.com" },
                    { title: "Clay Cohorts (Clay University)", desc: "Official Clay-led cohorts, closest to 'from the source'.", url: "https://university.clay.com/cohorts" },
                    { title: "GTM Engineer School", desc: "Smaller community alternative.", url: "https://gtm-engineer-school.com" },
                    { title: "Udemy, GTM Engineering B2B Playbook", desc: "Self-paced, cheap, hands-on.", url: "https://udemy.com/course/the-gtm-engineering-b2b-playbook-learn-clay-gui-stetelle" }
                ]
            },
            {
                category: "Reference implementations",
                items: [
                    { title: "Pierson Marks, google-search-ads-builder (Claude Skill)", desc: "A clean example of MCP-driven GTM engineering applied to paid acquisition.", url: "https://github.com/piersonmarks/google-search-ads-builder" }
                ]
            }
        ],

        toolstackIntro: "The stack I'm building literacy in, split into core, engineering layer, and the job-search loadout.",
        toolstack: [
            {
                category: "Core (must be fluent)",
                items: [
                    { tool: "Clay", role: "Orchestration table, accounts, contacts, enrichments, outputs", note: "Learning, MCP wired in." },
                    { tool: "LinkedIn Sales Navigator", role: "Richest B2B people-data source", note: "Have access, need to script with Clay." },
                    { tool: "Apollo / Clearbit / ZoomInfo", role: "Enrichment APIs", note: "Background, used through Clay." },
                    { tool: "HubSpot / Salesforce", role: "System of record", note: "Familiar from Moonwell / Balancer." },
                    { tool: "Slack", role: "Activation + alerting endpoint", note: "Daily driver." }
                ]
            },
            {
                category: "Engineering layer",
                items: [
                    { tool: "Anthropic Claude / OpenAI", role: "Inline AI columns, summarization, classification", note: "Replaces 80% of manual research." },
                    { tool: "MCP servers (Model Context Protocol)", role: "Standardized tool layer for LLM-driven workflows", note: "The future of agentic GTM." },
                    { tool: "n8n / Zapier / Make", role: "Glue between systems", note: "Escape hatch when Clay isn't enough." },
                    { tool: "PostHog / Mixpanel / Amplitude", role: "Product-side truth on what 'value' really means", note: "Pairs with Clay for full-funnel." },
                    { tool: "GitHub", role: "Where serious GTM-Eng workflows now live", note: "Source-controlled GTM is the trend." },
                    { tool: "Notion / Coda", role: "Workflow docs + dashboards", note: "Documentation layer." }
                ]
            },
            {
                category: "Job-search loadout (this session)",
                items: [
                    { tool: "Clay (MCP)", role: "Enriching target companies + surfacing contacts" },
                    { tool: "Web search + web fetch", role: "Job board mining, posting validation" },
                    { tool: "VC portfolio job boards", role: "Polychain / a16z / Valor / TheVentureCity → Getro, Lever, Greenhouse, Ashby" },
                    { tool: "Google Drive (read/index)", role: "Locating CVs, cover letters, contracts" },
                    { tool: "Excel / openpyxl", role: "Tracker until I port it to Clay" }
                ]
            }
        ],

        donate: {
            intro: "If anything on this page is useful to you, support more writing like it. Every contribution funds independent growth-engineering research and content.",
            address: "0x81091b9E5D49e264C051d3aeb3023A4C170c6888",
            note: "I accept donations on any EVM-compatible chain, Ethereum, Base, Arbitrum, Optimism, and more."
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
