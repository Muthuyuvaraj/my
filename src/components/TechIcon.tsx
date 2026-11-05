import {
  siReact,
  siNextdotjs,
  siJavascript,
  siTypescript,
  siMui,
  siTailwindcss,
  siFramer,
  siNodedotjs,
  siExpress,
  siMongodb,
  siRecoil,
  siReactquery,
  siGit,
  siGithub,
  siVite,
  siVercel,
  siNetlify,
  siRender,
  type SimpleIcon,
} from "simple-icons";

// Brand logos from simple-icons (CC0). Rendered as inline SVG at build time — zero client JS.
const brands: Record<string, SimpleIcon> = {
  react: siReact,
  nextjs: siNextdotjs,
  javascript: siJavascript,
  typescript: siTypescript,
  mui: siMui,
  tailwind: siTailwindcss,
  framer: siFramer,
  nodejs: siNodedotjs,
  express: siExpress,
  mongodb: siMongodb,
  recoil: siRecoil,
  reactquery: siReactquery,
  git: siGit,
  github: siGithub,
  vite: siVite,
  vercel: siVercel,
  netlify: siNetlify,
  render: siRender,
};

// Line icons for things without a brand logo in simple-icons
const outline: Record<string, React.ReactNode> = {
  playwright: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5 3.5-5 3.5z" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2M8.5 11.5l1.8 1.8 3.4-3.6" />
    </>
  ),
  marketing: <path d="M3 10v4h3l6 4V6L6 10H3zM16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />,
};

/** Near-black logos would vanish on the dark space theme, so they follow the text colour instead. */
function isDark(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 40;
}

export default function TechIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const brand = brands[name];
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill={isDark(brand.hex) ? "currentColor" : `#${brand.hex}`}
        aria-hidden
        focusable="false"
      >
        <path d={brand.path} />
      </svg>
    );
  }
  const line = outline[name];
  if (!line) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} text-accent`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {line}
    </svg>
  );
}
