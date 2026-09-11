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
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
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

export const personalInfo = {
  name: "Bete Abrham",
  brandName: "Growth & Design by Bete.",
  role: "Digital Marketing Strategist, UI Designer & Frontend Developer",
  focus: "SEO/SEM, UI/UX Design & Frontend Development",
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
    "Digital Marketing Strategist, UI/UX Designer, and Frontend Developer. Combining search engine optimization (SEO/SEM), Figma design, and frontend code to build products that captivate users and accelerate business growth.",
  aboutNarrative: [
    "I'm Bete Abrham, a Digital Marketing Specialist, Graphic & UI Designer, and Frontend Developer based in Addis Ababa, Ethiopia. I combine creative design, user-centric interfaces, and data-driven marketing to help businesses grow their online presence.",
    "I specialize in multi-channel digital marketing operations — spanning Search Engine Optimization (SEO), Search Engine Marketing (SEM), and targeted ad campaigns — while crafting refined brand visuals and web interfaces using Figma, Adobe Photoshop, and modern frontend tools.",
    "I'm studying Business Administration and Management at CPU Business and Information Technology College, giving me a strong strategic foundation in aligning design and engineering with measurable commercial impact.",
  ],
  stats: [
    { value: "2+", label: "Years Experience", description: "Driving digital growth & design" },
    { value: "100%", label: "Google Certified", description: "Fundamentals of Digital Marketing" },
    { value: "HP LIFE", label: "Certified Strategist", description: "Advanced Social Media Strategy" },
    { value: "Full-Cycle", label: "Creative & Code", description: "From Figma to live SEO campaigns" },
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
        "Collaborated cross-functionally with creative and engineering teams to optimize landing page performance and lead-generation funnels.",
      ],
      skills: ["SEO", "SEM", "Online Advertising", "Social Media Marketing", "Content Strategy"],
    },
    {
      company: "Chiraro Digital Solutions",
      role: "Graphic & UI Designer / Frontend Developer",
      period: "Aug 2024 — Oct 2025",
      type: "Full-time · Hybrid",
      location: "Addis Ababa, Ethiopia",
      highlights: [
        "Designed comprehensive digital branding materials, visual identities, and marketing creatives utilizing Adobe Photoshop and Canva.",
        "Built responsive user interfaces (UI) and prototypes in Figma, translating wireframes into functional, clean frontend web experiences.",
        "Ensured visual consistency across digital advertising assets, client social media channels, and web properties.",
      ],
      skills: ["Figma", "UI Design", "Front-End Development", "Adobe Photoshop", "Canva"],
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
    },
    {
      title: "Advanced Social Media Strategy Training and Certification",
      issuer: "HP LIFE",
      date: "Issued Nov 2023 · Expires Nov 2026",
      credentialId: "d4bd84db-661d-495b-bc77-8738637b9a18",
      skills: ["Social Media Marketing", "Online Advertising", "Brand Strategy"],
    },
  ] as CertificationItem[],
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bete-a-526899434", icon: "Linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/bethe_abrham/", icon: "Instagram" },
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "Email", url: "mailto:beteabrham07@gmail.com", icon: "Mail" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
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
    id: "ui-frontend",
    number: "002",
    title: "UI/UX & Frontend Development",
    tagline: "Clarity, hierarchy, and interaction.",
    description:
      "Intuitive digital product interfaces created in Figma and translated into fast, responsive, and engaging frontend web code that guides user action.",
    skills: ["Figma", "User Interface (UI) Design", "Front-End Development", "Responsive Layouts"],
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
    githubUrl: "https://github.com",
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
    githubUrl: "https://github.com",
    image: "/images/project-ui.webp",
    featured: true,
  },
  {
    id: "pulse-frontend",
    title: "Responsive Web Experiences",
    category: "Front-End Web Development",
    tagline: "Modern, lightweight frontend interfaces optimized for Core Web Vitals",
    description:
      "Sub-second loading web layouts designed with fluid responsiveness, accessibility compliance, and search-engine-friendly semantic markup.",
    tags: ["Front-End Development", "HTML5/CSS3", "JavaScript", "Responsive Design", "SEO"],
    liveUrl: "https://www.linkedin.com/in/bete-a-526899434",
    githubUrl: "https://github.com",
    image: "/images/project-web.webp",
    featured: false,
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
  "Front-End Development",
  "Adobe Photoshop",
  "Canva",
  "Social Media Marketing",
  "Online Advertising",
  "Content Management",
  "Email Marketing",
  "Affiliate Marketing",
  "Google Fundamentals Certified",
  "HP LIFE Certified",
  "Next.js & React",
  "Tailwind CSS",
  "Business Administration & Strategy",
];
