export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
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
  category: "Logo Design" | "Ad Campaign" | "Packaging & Banner" | "Editorial & Print";
  client: string;
  description: string;
  image: string;
  tags: string[];
  aspect: "square" | "banner" | "landscape";
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
    { value: "2+", label: "Years Experience", description: "Driving digital growth & design" },
    { value: "100%", label: "Google Certified", description: "Fundamentals of Digital Marketing" },
    { value: "HP LIFE", label: "Certified Strategist", description: "Advanced Social Media Strategy" },
    { value: "Full-Cycle", label: "Creative & Strategy", description: "From Figma to live SEO campaigns" },
  ] as StatItem[],
  experiences: [
    {
      company: "Chiraro Digital Solutions",
      role: "Digital Marketing Manager",
      period: "Aug 2024 — Sep 2025",
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
      period: "Aug 2024 — Oct 2025",
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
      title: "Fundamentals of Digital Marketing",
      issuer: "Google",
      date: "Issued Aug 2023 · Expires Aug 2026",
      credentialId: "175820G55",
      skills: ["Content Management", "Email Marketing", "SEO", "Analytics"],
      url: "https://skillshop.exceedlms.com/student/award/oa32Yn8nenfqCDhL1HCMxLxW",
    },
    {
      title: "Advanced Social Media Strategy Training and Certification",
      issuer: "HP LIFE",
      date: "Issued Nov 2023 · Expires Nov 2026",
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
  },
  {
    id: "ui-ux-design",
    number: "002",
    title: "UI/UX Design & Prototyping",
    tagline: "Clarity, hierarchy, and interaction.",
    description:
      "Intuitive digital product interfaces created in Figma, focused on clear visual hierarchy, user journey mapping, and interactive prototypes that guide user action.",
    skills: ["Figma", "User Interface (UI) Design", "UX Prototyping", "Design Systems", "Wireframing"],
  },
  {
    id: "graphic-design",
    number: "003",
    title: "Graphic Design & Brand Assets",
    tagline: "Visuals that leave an impression.",
    description:
      "High-impact marketing creatives, brand identities, and social media visual assets crafted using Adobe Photoshop and Canva with uncompromising detail.",
    skills: ["Adobe Photoshop", "Canva", "Brand Identity", "Visual Communication"],
  },
  {
    id: "growth-social",
    number: "004",
    title: "Growth & Social Media Strategy",
    tagline: "Audience growth that converts.",
    description:
      "Certified by HP LIFE & Google: End-to-end social media strategy, content marketing funnels, email marketing automation, and multi-channel online advertising.",
    skills: ["Social Media Marketing", "Online Advertising", "Content Management", "Email Marketing"],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "growth-engine",
    title: "Search & Digital Growth Engine",
    category: "SEO & Digital Growth Strategy",
    tagline: "Omni-channel search visibility and conversion optimization platform",
    description:
      "Comprehensive SEO/SEM campaign architecture, keyword clustering, and high-converting landing page experiences engineered for measurable client acquisition.",
    tags: ["SEO", "SEM", "Google Analytics", "Landing Page UI", "Content Strategy"],
    liveUrl: "https://www.linkedin.com/in/bete-a-526899434",
    image: "/images/project-growth.webp",
    featured: true,
  },
  {
    id: "brand-ui-system",
    title: "Creative Brand & UI System",
    category: "UI Design & Brand Architecture",
    tagline: "Figma design system and digital advertising asset library",
    description:
      "A centralized design system and marketing asset hub built in Figma and Adobe Photoshop, unifying visual identities and accelerating campaign turnarounds.",
    tags: ["Figma", "User Interface Design", "Adobe Photoshop", "Canva", "Brand Guidelines"],
    liveUrl: "https://www.linkedin.com/in/bete-a-526899434",
    image: "/images/project-ui.webp",
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
];
