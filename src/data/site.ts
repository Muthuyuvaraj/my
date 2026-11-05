// All editable site content lives here. Change text in this file — no need to touch components.

export const site = {
  name: "Muthu Yuvaraj",
  initials: "MY",
  // Set NEXT_PUBLIC_SITE_URL in .env.local / Vercel to your real domain (e.g. https://muthuyuvaraj.com)
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  title: "Muthu Yuvaraj | Frontend Engineer, Full-Stack Developer & Freelancer",
  description:
    "Frontend engineer and full-stack developer building modern web applications, SaaS platforms, dashboards, ERP systems and e-commerce for businesses worldwide. Available for freelance.",
  jobTitle: "Frontend Engineer | Full-Stack Developer | Freelancer",
  email: "muthuyuvarajm@gmail.com",
  whatsapp: "919787479771",
  location: "India (IST, UTC+5:30)",
  socials: {
    linkedin: "https://www.linkedin.com/in/muthuyuvaraj",
    github: "https://github.com/Muthuyuvaraj",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "SaaS Dashboards",
    "ERP Systems",
    "E-commerce",
    "SEO",
  ],
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  role: "Frontend & Full-Stack Developer",
  availability: "Available for freelance",
  headline: "Web apps & SaaS",
  headlineAccent: "built to scale.",
  subhead: "I turn complex requirements into fast, clean, user-friendly software — from dashboards to complete business systems.",
  stats: [
    { value: "1.5+", label: "Years of experience" },
    { value: "6+", label: "Products built" },
    { value: "20+", label: "Tools & technologies" },
    { value: "24h", label: "Response time" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a software developer passionate about building modern, scalable and user-friendly web applications. With hands-on experience in frontend engineering and full-stack development, I specialize in transforming complex requirements into intuitive digital experiences.",
    "I have worked on SaaS platforms, ERP systems, inventory management, e-commerce applications, interactive dashboards and business automation tools.",
    "I enjoy solving real-world problems through clean architecture, reusable components, performance optimization and thoughtful UI/UX design — and I collaborate with businesses and individuals to turn their ideas into working digital products.",
  ],
  highlights: [
    { title: "Clean architecture", body: "Reusable components and maintainable code that scales with your product." },
    { title: "Performance first", body: "Fast load times, smooth interactions and solid Core Web Vitals." },
    { title: "Thoughtful UI/UX", body: "Complex workflows made simple, on every screen size." },
    { title: "End-to-end delivery", body: "From idea and design to deployment and support." },
  ],
};

// `icon` keys map to logos in src/components/TechIcon.tsx
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    category: "UI Development",
    items: [
      { name: "Material UI", icon: "mui" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "framer" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
    ],
  },
  { category: "Database", items: [{ name: "MongoDB", icon: "mongodb" }] },
  {
    category: "State Management",
    items: [
      { name: "Recoil", icon: "recoil" },
      { name: "React Query", icon: "reactquery" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vite", icon: "vite" },
      { name: "Playwright", icon: "playwright" },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "Render", icon: "render" },
    ],
  },
  {
    category: "Marketing",
    items: [
      { name: "SEO", icon: "seo" },
      { name: "Digital Marketing", icon: "marketing" },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  stack: string[];
  features: string[];
  preview: "dashboard" | "table" | "tour" | "billing" | "shop" | "crm";
};

// Client / company work is described without naming the client.
export const projects: Project[] = [
  {
    title: "Enterprise SaaS Platform",
    category: "Frontend Engineering",
    stack: ["React", "TypeScript"],
    features: [
      "Complex dashboard development",
      "Interactive data tables & reusable components",
      "Scenario planning and comparison",
      "Global search and audit log",
      "Responsive UI & theme customization",
    ],
    preview: "dashboard",
  },
  {
    title: "Sustainability & ERP Platform",
    category: "Frontend Engineering",
    stack: ["React", "MUI", "Recoil"],
    features: [
      "Inventory and component management",
      "Scenario comparison",
      "Material cost & recyclability validation",
      "Import workflows and templates",
    ],
    preview: "table",
  },
  {
    title: "Interactive Product Tour Engine",
    category: "Product Onboarding",
    stack: ["React", "JavaScript"],
    features: [
      "Dynamic spotlight and popovers",
      "JSON-driven guided tours",
      "Route-based tour continuation",
      "Automatic scrolling & guided actions",
      "Interactive onboarding workflows",
    ],
    preview: "tour",
  },
  {
    title: "Dairy Billing Management System",
    category: "Business Software",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Dealer and product management",
      "Crate-wise billing",
      "Bluetooth thermal printing",
      "Sales reports and dashboard",
    ],
    preview: "billing",
  },
  {
    title: "E-commerce & WhatsApp Ordering",
    category: "E-commerce",
    stack: ["Next.js", "React"],
    features: [
      "Product catalogue & shopping cart",
      "Admin product management",
      "WhatsApp-based checkout",
      "Mobile-first shopping experience",
    ],
    preview: "shop",
  },
  {
    title: "CRM & Business Applications",
    category: "Full-Stack Development",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Business workflow development",
      "API integration",
      "Database management",
      "Authentication and CRUD operations",
    ],
    preview: "crm",
  },
];

export const services = [
  {
    title: "Custom Website Development",
    body: "Responsive business websites, portfolio websites and landing pages tailored to your brand.",
  },
  {
    title: "Web Applications & SaaS",
    body: "Custom dashboards, CRM, ERP, inventory systems and business automation.",
  },
  {
    title: "E-commerce Development",
    body: "Online stores, product management, shopping carts and ordering integrations like WhatsApp checkout.",
  },
  {
    title: "SEO & Digital Marketing",
    body: "Search engine optimization, website visibility and social media marketing.",
  },
];

// Professional Journey — focused on what you built, not employer details.
export const journey = [
  {
    period: "Present",
    role: "Frontend / Full-Stack Developer",
    context: "SaaS & ERP products",
    body: "Building enterprise dashboards, data-heavy interfaces, scenario-planning tools and onboarding experiences with React, TypeScript, MUI and Recoil.",
  },
  {
    period: "Freelance",
    role: "Freelance Developer",
    context: "Businesses & individuals",
    body: "Delivering billing systems, e-commerce stores with WhatsApp ordering, CRM tools and business websites end to end.",
  },
  {
    period: "Earlier",
    role: "MERN Stack Developer",
    context: "Web development team",
    body: "Built and deployed MERN applications in a team, including a resume builder with authentication and an inventory management system.",
  },
  {
    period: "Internship",
    role: "Student Intern — ISRO",
    context: "Indian Space Research Organisation",
    body: "Windows Server management, data-center network infrastructure and Python automation for secure file transfer.",
  },
];
