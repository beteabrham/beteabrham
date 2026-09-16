export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
  url?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  overview?: string;
  deliverables?: string[];
  process?: { step: string; title: string; desc: string }[];
  metrics?: { label: string; value: string }[];
  tools?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  url?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  aspect?: string;
  featured?: boolean;
}

export interface ExplorationItem {
  title: string;
  type: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface GraphicWorkItem {
  id: string;
  title: string;
  category: "Logo Design" | "Ad Campaign" | "Digital Marketing" | "Packaging & Banner" | "Editorial & Print";
  client: string;
  description: string;
  image: string;
  tags: string[];
  aspect: "square" | "banner" | "landscape";
  year?: string;
}

export interface BrandUiScreenshotItem {
  id: string;
  title: string;
  category: "Overview" | "Landing & Hero" | "Platform & DSP" | "Artist & Studio" | "Pricing & Splits";
  client: string;
  description: string;
  image: string;
  tags: string[];
  year?: string;
}

export interface GrowthEngineScreenshotItem {
  id: string;
  title: string;
  category: "Search & AI Overview" | "Streaming Telemetry" | "Audience & Geo" | "Demographics & Sources";
  client: string;
  description: string;
  image: string;
  tags: string[];
  year?: string;
}

export const personalInfo = {
  name: "Bete Abrham",
  brandName: "Growth & Design by Bete.",
  role: "Digital Marketing Strategist & UI/UX Designer",
  focus: "SEO/SEM, UI/UX Design & Growth Strategy",
  education: "CPU Business and Information Technology College",
  location: "Addis Ababa, Ethiopia",
  timezone: "GMT+3",
  status: "Open to work (Remote & Hybrid)",
  email: "beteabrham07@gmail.com",
  linkedin: "https://www.linkedin.com/in/bete-a-526899434",
  instagram: "https://www.instagram.com/bethe_abrham/",
  heroImage: "/bete-smiling.png",
  heroHeadline: {
    part1: "Digital Strategist & Designer",
    part2: "crafting high-converting experiences from",
    part3: "UI/UX to organic SEO & growth",
    part4: ".",
  },
  shortBio:
    "Digital Marketing Strategist and UI/UX Designer. Combining search engine optimization (SEO/SEM), Figma design, and data-driven marketing to build brand experiences that captivate users and accelerate business growth.",
  aboutNarrative: [
    "I'm Bete Abrham, a Digital Marketing Specialist and Graphic & UI Designer based in Addis Ababa, Ethiopia. I combine creative design, user-centric interfaces, and data-driven marketing to help businesses grow their online presence.",
    "I specialize in multi-channel digital marketing operations — spanning Search Engine Optimization (SEO), Search Engine Marketing (SEM), and targeted ad campaigns — while crafting refined brand visuals and user interface designs using Figma, Adobe Photoshop, and Canva.",
    "I'm studying Business Administration and Management at CPU Business and Information Technology College, giving me a strong strategic foundation in aligning design and business operations with measurable commercial impact.",
  ],
  stats: [
    {
      value: "2+",
      label: "Years Experience",
      description: "Driving digital growth & design",
    },
    {
      value: "Udemy",
      label: "Certified Designer",
      description: "Graphic Design Masterclass",
      url: "https://ude.my/UC-f4fb16b2-4e5a-42e8-91e8-2a381a8a347f",
    },
    {
      value: "Google",
      label: "Certified Marketer",
      description: "Fundamentals of Digital Marketing",
      url: "https://skillshop.exceedlms.com/student/award/oa32Yn8nenfqCDhL1HCMxLxW",
    },
    {
      value: "HP LIFE",
      label: "Certified Strategist",
      description: "Advanced Social Media Strategy",
      url: "https://www.life-global.org/certificate/d4bd84db-551d-495b-bc77-8738637b9e18",
    },
  ] as StatItem[],
  experiences: [
    {
      company: "Chiraro Digital Solutions",
      role: "Digital Marketing Manager",
      period: "Aug 2024 — 2026",
      type: "Full-time · Hybrid",
      location: "Addis Ababa, Ethiopia",
      highlights: [
        "Architected and executed high-ROI Search Engine Marketing (SEM) and SEO strategies to maximize discoverability and organic conversions.",
        "Managed end-to-end content distribution, performance advertising, and analytics reporting across multiple digital touchpoints.",
        "Collaborated cross-functionally with creative and technical teams to optimize landing page performance and lead-generation funnels.",
      ],
      skills: ["SEO", "SEM", "Online Advertising", "Social Media Marketing", "Content Strategy"],
    },
    {
      company: "Chiraro Digital Solutions",
      role: "Graphic & UI Designer",
      period: "Aug 2024 — 2026",
      type: "Full-time · Hybrid",
      location: "Addis Ababa, Ethiopia",
      highlights: [
        "Designed comprehensive digital branding materials, visual identities, and marketing creatives utilizing Adobe Photoshop and Canva.",
        "Built responsive user interfaces (UI) and prototypes in Figma, translating wireframes into functional, clean digital product experiences.",
        "Ensured visual consistency across digital advertising assets, client social media channels, and web properties.",
      ],
      skills: ["Figma", "UI Design", "UX Prototyping", "Adobe Photoshop", "Canva"],
    },
  ] as ExperienceItem[],
  educationDetails: {
    institution: "CPU Business and Information Technology College",
    degree: "Bachelor of Business Administration (BBA)",
    field: "Business Administration and Management, General",
    period: "Oct 2024 — Jul 2028",
    location: "Addis Ababa, Ethiopia",
  },
  certifications: [
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      issuer: "Udemy",
      date: "Issued Sep 2026",
      credentialId: "UC-f4fb16b2-4e5a-42e8-91e8-2a381a8a347f",
      skills: ["Graphic Design", "Typography", "Branding", "Adobe Photoshop"],
      url: "https://ude.my/UC-f4fb16b2-4e5a-42e8-91e8-2a381a8a347f",
    },
    {
      title: "Fundamentals of Digital Marketing",
      issuer: "Google",
      date: "Issued Aug 2023 · Expires Aug 2036",
      credentialId: "175820G55",
      skills: ["Content Management", "Email Marketing", "SEO", "Analytics"],
      url: "https://skillshop.exceedlms.com/student/award/oa32Yn8nenfqCDhL1HCMxLxW",
    },
    {
      title: "Advanced Social Media Strategy Training and Certification",
      issuer: "HP LIFE",
      date: "Issued Nov 2023 · Expires Nov 2036",
      credentialId: "d4bd84db-551d-495b-bc77-8738637b9e18",
      skills: ["Social Media Marketing", "Online Advertising", "Brand Strategy"],
      url: "https://www.life-global.org/certificate/d4bd84db-551d-495b-bc77-8738637b9e18",
    },
  ] as CertificationItem[],
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bete-a-526899434", icon: "Linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/bethe_abrham/", icon: "Instagram" },
    { name: "GitHub", url: "https://github.com/beteabrham", icon: "Github" },
    { name: "Email", url: "mailto:beteabrham07@gmail.com", icon: "Mail" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "seo-sem",
    number: "001",
    title: "SEO & Search Marketing (SEM)",
    tagline: "Be discovered by high-intent customers.",
    description:
      "Data-backed search engine optimization and targeted pay-per-click search campaigns that increase organic ranking, domain visibility, and qualified leads.",
    skills: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Keyword Research", "Google Analytics"],
    overview:
      "Designed to position your business directly in front of buyers actively searching for your solutions. I combine rigorous technical search audits, high-intent keyword clustering, and data-driven Google Ads (SEM) PPC management to build an enduring inbound customer engine.",
    deliverables: [
      "Full On-Page & Technical Search Audits (Crawlability, Core Web Vitals, Schema)",
      "High-Intent Keyword Research & Competitor Opportunity Mapping",
      "Google Ads (SEM) Campaign Setup, Search Ad Copywriting & Bid Management",
      "Google Analytics 4 (GA4) & Google Search Console Event Tracking",
      "CTR-Focused Metadata Optimization & Search Snippet Refinement",
    ],
    process: [
      {
        step: "01",
        title: "Audit & Opportunity Mapping",
        desc: "Analyze indexing roadblocks, technical health, search volume, and high-converting keyword queries across your industry niche.",
      },
      {
        step: "02",
        title: "On-Page & Campaign Deployment",
        desc: "Refactor page hierarchies, metadata, and structured data while deploying tightly themed, high-converting PPC search ad groups.",
      },
      {
        step: "03",
        title: "Analytics & Growth Scaling",
        desc: "Monitor impression shares, organic climb, and conversion paths to continuously lower acquisition costs and scale top performers.",
      },
    ],
    metrics: [
      { label: "Search Strategy", value: "Organic + Paid SEM" },
      { label: "Conversion Focus", value: "High-Intent Inbound" },
      { label: "Tracking Setup", value: "GA4 & GSC Verified" },
    ],
    tools: ["Google Search Console", "Google Analytics 4", "Google Ads", "Ahrefs", "Semrush", "Google Tag Manager"],
  },
  {
    id: "ui-ux-design",
    number: "002",
    title: "UI/UX Design & Prototyping",
    tagline: "Clarity, hierarchy, and interaction.",
    description:
      "Intuitive digital product interfaces created in Figma, focused on clear visual hierarchy, user journey mapping, and interactive prototypes that guide user action.",
    skills: ["Figma", "User Interface (UI) Design", "UX Prototyping", "Design Systems", "Wireframing"],
    overview:
      "Bridging aesthetic refinement with clean, conversion-focused user journeys. I transform complex workflows into elegant, intuitive Figma interfaces with modular component libraries, clear typography scales, and responsive layouts ready for developer handoff.",
    deliverables: [
      "High-Fidelity Interactive Prototypes & Clickable Flows in Figma",
      "End-to-End User Journey Mapping & Low-Fidelity Wireframes",
      "Atomic Design Systems (Typography scales, color tokens, reusable components)",
      "Mobile-First & Desktop Responsive Interface Layouts",
      "Detailed Developer Handoff Documentation & Interactive State Specs",
    ],
    process: [
      {
        step: "01",
        title: "User Journey & Blueprinting",
        desc: "Map user goals, eliminate cognitive friction, and establish structural wireframes for clear content hierarchy.",
      },
      {
        step: "02",
        title: "Component Systems & Prototyping",
        desc: "Build scalable Figma components, interactive micro-states, and prototype user interactions for realistic validation.",
      },
      {
        step: "03",
        title: "Handoff & Implementation Guidance",
        desc: "Provide production tokens, layout constraints, and asset packages to engineering teams for seamless frontend fidelity.",
      },
    ],
    metrics: [
      { label: "Design Environment", value: "Figma & FigJam" },
      { label: "Architecture", value: "Atomic Components" },
      { label: "Responsiveness", value: "Mobile & Desktop" },
    ],
    tools: ["Figma", "FigJam", "Design Systems", "Wireframing", "Interactive Prototypes"],
  },
  {
    id: "graphic-design",
    number: "003",
    title: "Graphic Design & Brand Assets",
    tagline: "Visuals that leave an impression.",
    description:
      "High-impact marketing creatives, brand identities, and social media visual assets crafted using Adobe Photoshop and Canva with uncompromising detail.",
    skills: ["Adobe Photoshop", "Canva", "Brand Identity", "Visual Communication"],
    overview:
      "Visual communication that captures immediate attention and builds memorable brand recognition. Backed by formal Udemy Graphic Design Masterclass training and 22+ commercial brand deliverables spanning packaging, identity marks, digital advertising, and editorial layouts.",
    deliverables: [
      "Distinctive Primary, Secondary & Iconographic Brand Logo Marks",
      "Complete Brand Visual Guidelines (Color harmony, typography pairings, usage rules)",
      "High-Converting Social Media Advertising Creatives & Web Banners",
      "Product Packaging, Label Graphics & Marketing Collaterals",
      "Multi-Format Production Master Files (Vector SVG, Print PDF, High-Res PNG)",
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery & Creative Direction",
        desc: "Synthesize business vision, competitive landscape, and moodboards into focused aesthetic themes.",
      },
      {
        step: "02",
        title: "Iterative Concept Exploration",
        desc: "Draft diverse vector marks, typographic treatments, and color systems, stress-testing across varied media contexts.",
      },
      {
        step: "03",
        title: "Final Polish & Asset Packaging",
        desc: "Deliver production-grade master files across vector formats, digital web resolutions, and press-ready print standards.",
      },
    ],
    metrics: [
      { label: "Design Credential", value: "Udemy Certified" },
      { label: "Commercial Works", value: "22+ Live Projects" },
      { label: "Delivery Formats", value: "Vector & Print Ready" },
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva Pro", "Vector Assets", "Brand Identity"],
  },
  {
    id: "growth-social",
    number: "004",
    title: "Growth & Social Media Strategy",
    tagline: "Audience growth that converts.",
    description:
      "Certified by HP LIFE & Google: End-to-end social media strategy, content marketing funnels, email marketing automation, and multi-channel online advertising.",
    skills: ["Social Media Marketing", "Online Advertising", "Content Management", "Email Marketing"],
    overview:
      "Data-driven growth marketing validated by Google and HP LIFE certifications. I develop full-funnel customer acquisition systems, cohesive social media content pillars, and automated lead nurture sequences that convert passive viewers into loyal clients.",
    deliverables: [
      "Multi-Platform Social Media Growth Roadmaps & Content Pillars",
      "Targeted Paid Advertising Campaigns across Meta (Instagram/Facebook) & LinkedIn",
      "Automated Email Marketing Lead Nurture & Welcome Workflows",
      "Content Calendar Planning, Strategic Copywriting & Asset Scheduling",
      "Weekly Engagement, Cost-Per-Acquisition (CAC) & ROAS Performance Reports",
    ],
    process: [
      {
        step: "01",
        title: "Audience Profiling & Funnel Design",
        desc: "Identify ideal client profiles, content triggers, and define top-of-funnel reach through bottom-of-funnel conversion stages.",
      },
      {
        step: "02",
        title: "Creative Production & Campaign Launch",
        desc: "Execute targeted ad sets and curated social posts designed to drive immediate engagement and lead capture.",
      },
      {
        step: "03",
        title: "A/B Testing & Funnel Optimization",
        desc: "Analyze click-through rates, lead retention, and customer acquisition costs to double down on winning creative vectors.",
      },
    ],
    metrics: [
      { label: "Strategy Badges", value: "Google & HP LIFE" },
      { label: "Ad Channels", value: "Meta, Google & LinkedIn" },
      { label: "Execution Model", value: "Data-Driven ROI" },
    ],
    tools: ["Meta Ads Manager", "Google Analytics", "HP LIFE Frameworks", "Email Automation", "Content Scheduling"],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "graphics-design-logos",
    title: "Graphic Design & Logo Designs",
    category: "Brand Identity & Visual Arts",
    tagline: "Commercial logo identities, packaging graphics, and advertising assets",
    description:
      "Curated collection of 22 commercial design projects for brands including Aye Hiking Tour, Rdvate, Kaff Leather, Pattern 33, Lele Baltena, and Lifelong Learning Library. Click to open the full interactive showcase.",
    tags: ["Logo Design", "Ad Campaigns", "Packaging", "Adobe Photoshop", "Canva"],
    liveUrl: "#work",
    image: "/graphics work/0001-1778030199_20210524_064435_0000 (2).png",
    featured: true,
  },
  {
    id: "growth-engine",
    title: "Search & Digital Growth Engine — ICE 'Mestawet' EP",
    category: "SEO & Digital Growth Strategy",
    tagline: "Google SERP #1 ranking, AI Overview integration & multi-DSP streaming conversion",
    description:
      "A complete digital growth engine engineered for artist ICE's 'Mestawet' EP release. Secured #1 organic Google search ranking with featured AI Overview citation, captured 7,460+ multi-platform streams, and scaled audience reach to 5,035 international listeners across the Netherlands, Belgium, and Europe. Click to inspect live analytics and SERP audits.",
    tags: ["SEO/SEM", "Google AI Overview", "Streaming Analytics", "Audience Growth", "Digital Strategy", "Conversion Funnel"],
    liveUrl: "#work",
    image: "/growth-engine/growth-engine-analysis-mockup.jpg",
    featured: true,
  },
  {
    id: "brand-ui-system",
    title: "Fresh Cave — Music Web Platform & UI Design",
    category: "Web & UI/UX Design",
    tagline: "High-contrast music distribution & artist portal design system",
    description:
      "A comprehensive web application interface and design system crafted for Fresh Cave music distribution. Features high-contrast dark visual aesthetics, direct DSP pipelines, artist spotlight modules (Atlas Nova), verified studio directories, and royalty split engines. Click to explore all 12 interface screens.",
    tags: ["Web Design", "UI/UX", "Figma", "Design Systems", "Fresh Cave", "Isometric Mockup"],
    liveUrl: "#work",
    image: "/brand-ui/Screenshot 2026-09-16 204227.png",
    featured: true,
  },
  {
    id: "performance-marketing",
    title: "Multi-Channel Social & Ad Strategy",
    category: "Performance & Social Marketing",
    tagline: "HP LIFE & Google certified multi-channel marketing campaigns",
    description:
      "Targeted digital advertising architectures, audience segmentation, high-converting social media creative assets, and cross-channel campaign analytics.",
    tags: ["Social Media Marketing", "Online Advertising", "Brand Strategy", "Content Marketing", "Canva"],
    liveUrl: "https://www.linkedin.com/in/bete-a-526899434",
    image: "/images/project-web.webp",
    featured: true,
  },
];

export const explorationsData: ExplorationItem[] = [
  {
    title: "Photoshop Ad Composition",
    type: "Visual Creative",
    image: "/images/exp-ps.webp",
    tags: ["Adobe Photoshop", "Visual FX"],
  },
  {
    title: "Figma Micro-Interactions",
    type: "UI Prototype",
    image: "/images/exp-figma.webp",
    tags: ["Figma", "Interaction Design"],
  },
  {
    title: "Organic SEO Audit Matrix",
    type: "Growth Analytics",
    image: "/images/exp-seo.webp",
    tags: ["Google Search Console", "SERP"],
  },
  {
    title: "Brand Campaign Palette",
    type: "Social Media Strategy",
    image: "/images/exp-brand.webp",
    tags: ["HP LIFE", "Canva Pro"],
  },
];

export const techStackTicker = [
  "Search Engine Optimization (SEO)",
  "Search Engine Marketing (SEM)",
  "Figma",
  "User Interface (UI) Design",
  "UX Prototyping & Wireframing",
  "Adobe Photoshop",
  "Canva",
  "Social Media Marketing",
  "Online Advertising",
  "Content Management",
  "Email Marketing",
  "Affiliate Marketing",
  "Google Fundamentals Certified",
  "HP LIFE Certified",
  "Design Systems",
  "Brand Identity Strategy",
  "Business Administration & Strategy",
];

export const graphicsWorkData: GraphicWorkItem[] = [
  // 1. Logo Design (Starting with Pattern 33)
  {
    id: "pattern-33-dark",
    title: "Pattern 33 — Urban Athletic Mark (Dark)",
    category: "Logo Design",
    client: "Pattern 33",
    description: "Custom vector typographic emblem designed for sportswear and urban apparel branding, featuring dynamic split lettering and high-impact streetwear aesthetics.",
    image: "/graphics work/pattern33-1.jpg",
    tags: ["Logo Design", "Typography", "Apparel Branding", "Vector Emblem"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "pattern-33-light",
    title: "Pattern 33 — Monochromatic Vector Mark (Light)",
    category: "Logo Design",
    client: "Pattern 33",
    description: "High-contrast inverted variant optimized for light merchandise, apparel tags, embroidery, and digital screen applications.",
    image: "/graphics work/pattern33-2.jpg",
    tags: ["Logo Design", "Brand Identity", "Minimalism", "Merchandise"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "rdvate-logo",
    title: "Rdvate — Minimalist Brand Logo & Search Identity",
    category: "Logo Design",
    client: "Rdvate",
    description: "Monogram logo emblem and minimalist brand identity for digital solutions agency Rdvate, incorporating search discovery cues and fluid organic contours.",
    image: "/graphics work/5upscaled.png",
    tags: ["Logo Design", "Brand Identity", "Minimalism", "Vector Emblem"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "kaff-leather-badge",
    title: "Kaff Leather — Vintage Emblem & Crest",
    category: "Logo Design",
    client: "Kaff Leather",
    description: "Heritage-inspired ornamental crest and seal logo crafted for handcrafted Ethiopian genuine leather goods and footwear packaging.",
    image: "/graphics work/5_20231229_131750_0004.png",
    tags: ["Logo Design", "Vintage Emblem", "Brand Identity", "Adobe Photoshop"],
    aspect: "square",
    year: "2023",
  },

  // 2. Ad Campaign
  {
    id: "aye-hiking-ziway",
    title: "Aye Hiking Tour — Lake Ziway Eco-Adventure Campaign",
    category: "Ad Campaign",
    client: "Aye Hiking Tour",
    description: "High-impact promotional tourism campaign poster for Lake Ziway eco-tours, featuring pelican wildlife compositions, package inclusions, itinerary perks, and booking information.",
    image: "/graphics work/0001-1778030199_20210524_064435_0000 (2).png",
    tags: ["Ad Campaign", "Tourism Marketing", "Social Media Poster", "Visual Design"],
    aspect: "square",
    year: "2021",
  },
  {
    id: "aye-hiking-dendi",
    title: "Aye Hiking Tour — Lake Dendi Expedition Poster",
    category: "Ad Campaign",
    client: "Aye Hiking Tour",
    description: "Scenic adventure travel poster for Lake Dendi mountain expeditions, featuring double-crater aerial photography, circular visual badges, and complete package inclusions.",
    image: "/graphics work/01-30-04.30.21.jpg",
    tags: ["Ad Campaign", "Travel & Tourism", "Eco-Tour", "Canva & Photoshop"],
    aspect: "square",
    year: "2021",
  },
  {
    id: "aye-hiking-wenchi",
    title: "Aye Hiking Tour — Wenchi Crater Lake Adventure Poster",
    category: "Ad Campaign",
    client: "Aye Hiking Tour",
    description: "Serene nature expedition campaign creative for Wenchi Crater Lake, integrating diamond photo cutouts with lakeside landscapes and departure itinerary logistics.",
    image: "/graphics work/02-28-03.47.46 (2).jpg",
    tags: ["Ad Campaign", "Outdoor Tourism", "Promotional Design", "Visual Marketing"],
    aspect: "square",
    year: "2021",
  },
  {
    id: "aye-hiking-wenchi-urgency",
    title: "Aye Hiking Tour — Wenchi Urgency Campaign (One Week Left)",
    category: "Ad Campaign",
    client: "Aye Hiking Tour",
    description: "High-conversion last-call promotional poster for the Wenchi Crater Lake tour, utilizing dynamic diagonal color-blocking and clear urgency messaging to drive bookings.",
    image: "/graphics work/03-07-03.43.06 (2).jpg",
    tags: ["Ad Campaign", "Social Media Marketing", "Performance Ads", "CTA Strategy"],
    aspect: "square",
    year: "2021",
  },
  {
    id: "kaff-ad-code18",
    title: "Kaff Leather — Tassel Loafer Campaign (Code 18)",
    category: "Ad Campaign",
    client: "Kaff Leather",
    description: "Holiday promotional social media poster highlighting handcrafted black tassel loafers with festive discount pricing and high-converting CTA layout.",
    image: "/graphics work/10_20240502_215444_0009.png",
    tags: ["Ad Campaign", "Social Media Marketing", "Product Poster", "E-commerce"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "kaff-ad-code23",
    title: "Kaff Leather — Classic Oxford Campaign (Code 23)",
    category: "Ad Campaign",
    client: "Kaff Leather",
    description: "Commercial ad creative for formal derby and oxford shoes, pairing bold typography with refined studio product lighting and seasonal discount highlights.",
    image: "/graphics work/12_20240502_215445_0011.png",
    tags: ["Ad Campaign", "Social Ad", "Commercial Design", "Canva Pro"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "kaff-ad-code17",
    title: "Kaff Leather — Textured Loafer Campaign (Code 17)",
    category: "Ad Campaign",
    client: "Kaff Leather",
    description: "Vibrant social ad spotlighting textured casual slip-ons with call-to-action details, price anchoring, and Easter promotional styling.",
    image: "/graphics work/13_20240502_215445_0012.png",
    tags: ["Ad Campaign", "Digital Marketing", "Social Poster", "Adobe Photoshop"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "kaff-ad-code20",
    title: "Kaff Leather — Moccasin Slip-On Campaign (Code 20)",
    category: "Ad Campaign",
    client: "Kaff Leather",
    description: "Product campaign poster for casual suede driving moccasins designed for maximum reach and conversion on Instagram and Telegram feeds.",
    image: "/graphics work/17_20240502_215448_0016.png",
    tags: ["Ad Campaign", "Product Photography Layout", "Performance Ads", "Branding"],
    aspect: "square",
    year: "2024",
  },

  // 3. Digital Marketing
  {
    id: "rdvate-web-dev",
    title: "Rdvate — Web Design & Development Agency Creative",
    category: "Digital Marketing",
    client: "Rdvate",
    description: "High-resolution isometric digital agency ad creative showcasing modern responsive web engineering, SEO performance optimization, and interactive UX services.",
    image: "/graphics work/1upscaled.png",
    tags: ["Digital Marketing", "Agency Creative", "Isometric Art", "Web Design"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "rdvate-brand-dev",
    title: "Rdvate — Brand Development Creative Poster",
    category: "Digital Marketing",
    client: "Rdvate",
    description: "Clean modern isometric promotional creative for brand identity architecture, corporate logo design, and strategic visual positioning services.",
    image: "/graphics work/2upscaled.png",
    tags: ["Brand Identity", "Digital Marketing", "Isometric Design", "Tech Agency"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "rdvate-marketing-strategy",
    title: "Rdvate — Marketing Strategy & Consulting Creative",
    category: "Digital Marketing",
    client: "Rdvate",
    description: "Vibrant vector marketing creative highlighting data analytics dashboards, audience insights, and strategic business consulting for ROI growth.",
    image: "/graphics work/3upscaled.png",
    tags: ["Digital Marketing", "Analytics Strategy", "Social Media", "Consulting"],
    aspect: "square",
    year: "2024",
  },
  {
    id: "rdvate-digital-advertising",
    title: "Rdvate — Digital Advertising & Marketing Campaign",
    category: "Digital Marketing",
    client: "Rdvate",
    description: "Multichannel digital advertising campaign poster illustrating megaphone reach, targeted social media funnels, and performance marketing workflows.",
    image: "/graphics work/4upscaled.png",
    tags: ["Digital Marketing", "Online Advertising", "Social Media Marketing", "Campaign Design"],
    aspect: "square",
    year: "2024",
  },

  // 4. Packaging & Banner
  {
    id: "lele-baltena-brand-suite",
    title: "Lele Baltena — Complete Spice Line Brand Suite Mockup",
    category: "Packaging & Banner",
    client: "Lele Baltena",
    description: "Complete product line brand presentation mockup showing standing pouch variants for Berbere, Shiro, and Miten Shiro alongside amber apothecary spice jars and artisan raw ingredients.",
    image: "/graphics work/lele-baltena-brand-suite.jpg",
    tags: ["Brand Identity", "Packaging Suite", "Product Mockup", "Visual Design", "Food Packaging"],
    aspect: "landscape",
    year: "2024",
  },
  {
    id: "lele-baltena-berbere",
    title: "Lele Baltena — Berbere Spice Packaging Banner",
    category: "Packaging & Banner",
    client: "Lele Baltena",
    description: "Vibrant warm-toned food packaging and storefront banner design showcasing authentic Ethiopian berbere chili blend with traditional floral motifs.",
    image: "/graphics work/04.png",
    tags: ["Packaging Design", "Food Branding", "Banner Design", "Typography"],
    aspect: "banner",
    year: "2024",
  },
  {
    id: "lele-baltena-shiro",
    title: "Lele Baltena — Shiro Spice Packaging Banner",
    category: "Packaging & Banner",
    client: "Lele Baltena",
    description: "Traditional spice blend banner and label layout emphasizing roasted chickpea flour with clean typography, contact details, and appetizing visuals.",
    image: "/graphics work/15.png",
    tags: ["Packaging Design", "Brand Identity", "Storefront Banner", "Adobe Photoshop"],
    aspect: "banner",
    year: "2024",
  },
  {
    id: "lele-baltena-bulla",
    title: "Lele Baltena — Bulla Flour Packaging Banner",
    category: "Packaging & Banner",
    client: "Lele Baltena",
    description: "Cool cyan-blue packaging banner designed for pure enset bulla flour, balancing modern geometric layouts with authentic Ethiopian culinary identity.",
    image: "/graphics work/17.png",
    tags: ["Packaging Design", "Visual Identity", "Food Packaging", "Graphic Design"],
    aspect: "banner",
    year: "2024",
  },
  {
    id: "lele-baltena-miten-shiro",
    title: "Lele Baltena — Miten Shiro Packaging Banner",
    category: "Packaging & Banner",
    client: "Lele Baltena",
    description: "Rich emerald green packaging identity and digital banner for spiced miten shiro powder, highlighting product weight and order contact lines.",
    image: "/graphics work/20.png",
    tags: ["Packaging Design", "Commercial Banner", "Graphic Design", "Canva & Photoshop"],
    aspect: "banner",
    year: "2024",
  },

  // 5. Editorial & Print
  {
    id: "lifelong-learning-editorial",
    title: "Lifelong Learning Library — Workshop Editorial & Brochure",
    category: "Editorial & Print",
    client: "Lifelong Learning Library PLC / Mald International School",
    description: "Comprehensive editorial design and informational brochure layout detailing speed reading workshop curricula, scheduling, and fee structures.",
    image: "/graphics work/1.png",
    tags: ["Editorial Design", "Brochure Layout", "Information Hierarchy", "Print Design"],
    aspect: "landscape",
    year: "2023",
  },
];

export const brandUiScreenshotsData: BrandUiScreenshotItem[] = [
  {
    id: "fresh-cave-mockup-overview",
    title: "Fresh Cave — Interactive 3D Web Design & UI Showcase",
    category: "Overview",
    client: "Fresh Cave",
    year: "2024",
    description: "Multi-screen interactive 3D isometric perspective showcase presenting Fresh Cave's dark mode visual identity, navigation bar, video hero banner, DSP streaming telemetry, artist spotlight cards, and tier pricing matrix.",
    image: "/brand-ui/Screenshot 2026-09-16 204227.png",
    tags: ["3D Mockup", "Isometric Presentation", "Design System", "Figma", "Interactive UI"],
  },
  {
    id: "fresh-cave-hero",
    title: "Hero Section — For Artists With Vision",
    category: "Landing & Hero",
    client: "Fresh Cave",
    year: "2024",
    description: "High-impact dark landing interface featuring bold typography, minimalist navigation ('ROSTER', 'DSP ACCESS', 'PRODUCERS', 'RATES'), call-to-action triggers, and active drop announcements.",
    image: "/brand-ui/Screenshot 2026-09-16 204227.png",
    tags: ["Hero Section", "Typography", "Dark UI", "Navigation", "Call to Action"],
  },
  {
    id: "fresh-cave-dsp-pipelines",
    title: "Direct DSP Pipelines & Distribution",
    category: "Platform & DSP",
    client: "Fresh Cave",
    year: "2024",
    description: "Global delivery architecture to Spotify, Apple Music, Vevo distribution, YouTube Official Artist Channel (OAC) synchronization, and smart rights lock.",
    image: "/brand-ui/Screenshot 2026-09-16 204257.png",
    tags: ["DSP Distribution", "Streaming APIs", "Lossless Audio", "Rights Management"],
  },
  {
    id: "fresh-cave-master-ownership",
    title: "Master Ownership & 48h Turnaround",
    category: "Platform & DSP",
    client: "Fresh Cave",
    year: "2024",
    description: "Artist advocacy metrics displaying 70% master ownership retention, rapid 48-hour DSP delivery turnaround, and real-time royalty sync across worldwide territories.",
    image: "/brand-ui/Screenshot 2026-09-16 204315.png",
    tags: ["Artist Rights", "Master Ownership", "Speed & Delivery", "Global Sync"],
  },
  {
    id: "fresh-cave-release-calendar",
    title: "Release Scheduling & Pre-Save Calendar",
    category: "Platform & DSP",
    client: "Fresh Cave",
    year: "2024",
    description: "Interactive single and album release scheduling calendar with automated pre-save links, countdown timers, and DSP batch ingestion triggers.",
    image: "/brand-ui/Screenshot 2026-09-16 204344.png",
    tags: ["Release Calendar", "Pre-Save", "Drop Countdown", "Automation"],
  },
  {
    id: "fresh-cave-streaming-analytics",
    title: "Real-Time Streaming Analytics & Growth Metrics",
    category: "Platform & DSP",
    client: "Fresh Cave",
    year: "2024",
    description: "Live dashboard monitoring global stream volume, geographic heatmaps, playlist placements, listener demographics, and viral track momentum.",
    image: "/brand-ui/Screenshot 2026-09-16 204405.png",
    tags: ["Analytics", "Data Dashboard", "Stream Counts", "Audience Insights"],
  },
  {
    id: "fresh-cave-royalty-split",
    title: "Transparent Royalty Split & Revenue Matrix",
    category: "Pricing & Splits",
    client: "Fresh Cave",
    year: "2024",
    description: "Automated multi-collaborator royalty split calculations, transparent payout reporting, and direct deposits for producers, vocalists, and engineers.",
    image: "/brand-ui/Screenshot 2026-09-16 204441.png",
    tags: ["Royalty Splits", "Revenue Share", "Financial Dashboard", "Payout Engine"],
  },
  {
    id: "fresh-cave-catalog-metadata",
    title: "Catalog & Metadata Management Engine",
    category: "Platform & DSP",
    client: "Fresh Cave",
    year: "2024",
    description: "End-to-end ISRC and UPC code generation, lossless audio upload validation, explicit tagging, and high-resolution cover artwork compliance checker.",
    image: "/brand-ui/Screenshot 2026-09-16 204509.png",
    tags: ["Metadata", "Catalog Manager", "ISRC & UPC", "Asset Quality"],
  },
  {
    id: "fresh-cave-producer-directory",
    title: "Producer Line — Verified Studio Directory",
    category: "Artist & Studio",
    client: "Fresh Cave",
    year: "2024",
    description: "Curated directory of industry-vetted mixing & mastering engineers, certified acoustic recording studios, and sample pack creators.",
    image: "/brand-ui/Screenshot 2026-09-16 204538.png",
    tags: ["Studio Directory", "Producer Line", "Sound Engineers", "Acoustic Spaces"],
  },
  {
    id: "fresh-cave-studio-booking",
    title: "Studio Session Booking & Checkout Flow",
    category: "Artist & Studio",
    client: "Fresh Cave",
    year: "2024",
    description: "Streamlined booking interface displaying studio hardware gear (analog boards, tube mics), calendar availability slots, engineer rates, and instant checkout.",
    image: "/brand-ui/Screenshot 2026-09-16 204558.png",
    tags: ["Booking Flow", "Studio Gear", "Calendar Scheduler", "Checkout"],
  },
  {
    id: "fresh-cave-sync-licensing",
    title: "Sync Licensing Vault & Media Placement",
    category: "Pricing & Splits",
    client: "Fresh Cave",
    year: "2024",
    description: "One-stop sync licensing catalog for film, television, gaming, and commercial trailer placement with pre-cleared master and publishing rights.",
    image: "/brand-ui/Screenshot 2026-09-16 204612.png",
    tags: ["Sync Licensing", "Film & TV", "Media Placements", "Publishing Rights"],
  },
  {
    id: "fresh-cave-artist-spotlight",
    title: "Featured Artist Spotlight — Atlas Nova",
    category: "Artist & Studio",
    client: "Fresh Cave",
    year: "2024",
    description: "Artist showcase landing module featuring Atlas Nova's catalog, monthly active listeners, latest music video releases, upcoming tour schedules, and merch store.",
    image: "/brand-ui/Screenshot 2026-09-16 204634.png",
    tags: ["Artist Spotlight", "Atlas Nova", "Roster", "Media Player", "Tour Dates"],
  },
  {
    id: "fresh-cave-pricing-tiers",
    title: "Distribution Tiers & Artist Membership Pricing",
    category: "Pricing & Splits",
    client: "Fresh Cave",
    year: "2024",
    description: "Transparent distribution tiers comparing Independent Artist, Breakthrough Pro, and Label Enterprise packages with automated payout frequencies.",
    image: "/brand-ui/Screenshot 2026-09-16 204657.png",
    tags: ["Pricing Matrix", "Membership Tiers", "Enterprise Plans", "Distribution Fees"],
  },
];

export const growthEngineScreenshotsData: GrowthEngineScreenshotItem[] = [
  {
    id: "growth-engine-serp-ai-overview",
    title: "Google Search #1 Ranking & Featured AI Overview",
    category: "Search & AI Overview",
    client: "ICE — Mestawet EP",
    year: "2026",
    description: "Targeted organic search optimization capturing rank #1 on Google for 'mestawet ice' with featured Spotify rich snippet and Google AI Overview summarizing the R&B/Soul EP release, Amharic title meaning, and 6-track tracklist.",
    image: "/growth-engine/Screenshot 2026-09-15 011320.png",
    tags: ["Google Search", "AI Overview", "Knowledge Graph", "Organic Ranking", "Rich Snippets"],
  },
  {
    id: "growth-engine-streaming-telemetry",
    title: "Cross-Platform Streaming Telemetry & Velocity Spikes",
    category: "Streaming Telemetry",
    client: "ICE — Mestawet EP",
    year: "2026",
    description: "Multi-DSP telemetry dashboard recording 7,460 total streams across Spotify, Apple Music, YouTube, and Amazon Music from Aug 27 to present, highlighting viral release-day velocity.",
    image: "/growth-engine/Screenshot 2026-09-16 222808.png",
    tags: ["Streaming Metrics", "DSP Distribution", "Growth Curve", "Launch Velocity"],
  },
  {
    id: "growth-engine-track-matrix",
    title: "Track Performance Matrix & Individual Stream Breakdown",
    category: "Streaming Telemetry",
    client: "ICE — Mestawet EP",
    year: "2026",
    description: "Granular track-by-track streaming audit showing breakout performance for lead single 'Desta' (3,114 streams), followed by 'Layhon' (1,162), 'Sehetet' (1,030), 'Lanchi' (826), and 'Yene Nat' (686).",
    image: "/growth-engine/Screenshot 2026-09-16 222902.png",
    tags: ["Track Analytics", "Catalog Audit", "Single Performance", "DSP Streams"],
  },
  {
    id: "growth-engine-sources-devices",
    title: "Channel Attribution (59% Playlists) & Device Breakdown",
    category: "Demographics & Sources",
    client: "ICE — Mestawet EP",
    year: "2026",
    description: "Inbound channel source analysis revealing 59% (4,249) streams driven by algorithmic/curated user playlists, 22% from full album plays, and 10% radio. Device analysis demonstrates an 86% mobile-first audience.",
    image: "/growth-engine/Screenshot 2026-09-16 222956.png",
    tags: ["Channel Attribution", "Playlist Marketing", "Mobile Dominance", "Device Breakdown"],
  },
  {
    id: "growth-engine-geo-mapping",
    title: "Global Geolocation Heatmap — 5,035 Active Listeners",
    category: "Audience & Geo",
    client: "ICE — Mestawet EP",
    year: "2026",
    description: "Interactive world map mapping 5,035 unique international listeners with major concentration hubs in the Netherlands (3,258 listeners) and Belgium (539 listeners) alongside Europe-wide diaspora engagement.",
    image: "/growth-engine/Screenshot 2026-09-16 223044.png",
    tags: ["Global Reach", "Geo Mapping", "Netherlands", "Belgium", "Audience Expansion"],
  },
  {
    id: "growth-engine-demographics",
    title: "Audience Demographic Segmentation (Age & Gender)",
    category: "Demographics & Sources",
    client: "ICE — Mestawet EP",
    year: "2026",
    description: "Audience demographic telemetry demonstrating core listener concentration in young adult cohorts (30% aged 28-34, 26% aged 23-27), with a 63% male and 30% female listener ratio.",
    image: "/growth-engine/Screenshot 2026-09-16 223123.png",
    tags: ["Audience Demographics", "Age Cohorts", "Gender Breakdown", "Market Intelligence"],
  },
];


