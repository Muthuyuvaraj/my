import Header from "@/components/Header";
import SpaceBackground from "@/components/SpaceBackground";
import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";
import ProjectPreview from "@/components/ProjectPreview";
import HeroShowcase from "@/components/HeroShowcase";
import TechIcon from "@/components/TechIcon";
import { about, hero, journey, projects, services, site, skills } from "@/data/site";

function SectionTitle({ index, label, title, intro }: { index: string; label: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="section-label">
        <span className="pro-only">{index} — </span>
        <span className="space-only" aria-hidden>
          ◉ Sector {index} ·{" "}
        </span>
        {label}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}

const Check = () => (
  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const serviceIcons = [
  // monitor
  <path key="a" d="M3 4h18v12H3zM8 20h8M12 16v4" />,
  // layout / dashboard
  <path key="b" d="M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z" />,
  // bag
  <path key="c" d="M6 7h12l1 14H5L6 7zM9 7a3 3 0 0 1 6 0" />,
  // trending
  <path key="d" d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
];

const highlightIcons = [
  // layers
  <path key="a" d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5" />,
  // zap
  <path key="b" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  // pointer / ux
  <path key="c" d="M4 4l7 17 2.5-7.5L21 11 4 4z" />,
  // rocket
  <path key="d" d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6l-7 7-5-5 7-7zM9 11l-3 0-2 3 4 1M13 15v3l-3 2-1-4" />,
];

export default function Home() {
  const waText = encodeURIComponent("Hi Muthu, I'd like to discuss a project.");
  const inquiry = encodeURIComponent(
    "Hi Muthu,\n\nProject type (website / web app / e-commerce / SEO):\nShort description:\nTimeline:\nBudget range:\n\nThanks!",
  );

  return (
    <>
      <SpaceBackground />
      <Header />
      <Reveal />

      <main id="main">
        {/* Hero */}
        <section id="home" className="hero relative">
          <div className="hero-grid-bg pro-only" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-32 pb-20 sm:px-6 lg:min-h-[88svh] lg:grid-cols-[1fr_1.1fr] lg:pt-28">
            <div className="reveal">
              <p className="status-pill">
                <span className="pulse-dot" aria-hidden />
                <span>
                  <span className="hidden sm:inline">{hero.role} · </span>
                  {hero.availability}
                </span>
              </p>
              <h1 className="font-display mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl">
                <span className="sr-only">{site.name} — </span>
                {hero.headline} <span className="headline-accent block">{hero.headlineAccent}</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted">{hero.subhead}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="#contact">
                  <span className="pro-only">Start your project</span>
                  <span className="space-only">Launch your project 🚀</span>
                </a>
                <a className="btn btn-ghost" href="#projects">
                  View my work
                </a>
              </div>
            </div>

            <div className="reveal relative">
              {/* Professional mode: product showcase */}
              <div className="pro-only">
                <HeroShowcase />
              </div>

              {/* Space mode: planet */}
              <div className="space-only hero-planet" aria-hidden>
                <div className="planet-body" />
                <div className="planet-ring" />
                <div className="moon-orbit">
                  <span className="moon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section aria-label="At a glance" className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <dl className="stats-band reveal grid grid-cols-2 md:grid-cols-4">
            {hero.stats.map((s) => (
              <div key={s.label} className="stat flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                <dd className="font-display text-3xl font-bold sm:text-4xl">
                  <span className="headline-accent">{s.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="reveal mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle index="01" label="About me" title="Turning complex requirements into intuitive products" />
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-4 text-lg text-muted">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="grid content-start gap-4 sm:grid-cols-2">
                {about.highlights.map((h, i) => (
                  <article key={h.title} className="card p-5">
                    <span className="service-icon mb-4">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        {highlightIcons[i]}
                      </svg>
                    </span>
                    <h3 className="font-display font-semibold">{h.title}</h3>
                    <p className="mt-2 text-sm text-muted">{h.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section section-alt">
          <div className="reveal mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle index="02" label="Technical skills" title="Tools I build with" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <article key={s.category} className="card p-5">
                  <h3 className="text-sm font-semibold text-muted">{s.category}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <li key={i.name} className="skill">
                        <TechIcon name={i.icon} />
                        {i.name}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="reveal mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              index="03"
              label="Featured projects"
              title="Products I've built"
              intro="A selection of SaaS, ERP and business products. Client work is shown without client names, out of respect for confidentiality."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <article key={p.title} className="card card-hover flex flex-col overflow-hidden">
                  <ProjectPreview type={p.preview} />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                      {String(i + 1).padStart(2, "0")} · {p.category}
                    </p>
                    <h3 className="font-display mt-2 text-xl font-semibold">{p.title}</h3>
                    <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                      {p.stack.map((t) => (
                        <li key={t} className="tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted">
              More code on{" "}
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section section-alt">
          <div className="reveal mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              index="04"
              label="Freelance services"
              title="What I can build for you"
              intro="Whether you need a website, a custom business tool or more customers online — I take your idea from first call to launch."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <article key={s.title} className="card card-hover flex flex-col p-6">
                  <span className="service-icon">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {serviceIcons[i]}
                    </svg>
                  </span>
                  <h3 className="font-display mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{s.body}</p>
                  <a href="#contact" className="mt-5 text-sm font-semibold text-accent hover:underline">
                    Discuss your project →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section id="journey" className="section">
          <div className="reveal mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle index="05" label="Professional journey" title="How I got here" />
            <ol className="timeline grid gap-8 md:grid-cols-2">
              {journey.map((j) => (
                <li key={j.role} className="timeline-item">
                  <p className="text-xs font-semibold tracking-wider text-accent uppercase">{j.period}</p>
                  <h3 className="font-display mt-1 text-lg font-semibold">{j.role}</h3>
                  <p className="text-sm text-muted">{j.context}</p>
                  <p className="mt-3 text-sm text-muted">{j.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="reveal mx-auto max-w-3xl px-4 sm:px-6">
            <div className="card contact-card p-8 text-center sm:p-12">
              <p className="section-label justify-center">
                <span className="pro-only">06 — Contact me</span>
                <span className="space-only">◉ Open a channel</span>
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Have a project in mind?</h2>
              <p className="mt-4 text-muted">
                Tell me what you want to build. I reply within 24 hours (Mon–Fri) with next steps and a rough estimate.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a className="btn btn-primary" href={`mailto:${site.email}?subject=Project%20Inquiry&body=${inquiry}`}>
                  Send a project inquiry
                </a>
                <a className="btn btn-ghost" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${site.whatsapp}?text=${waText}`}>
                  WhatsApp me
                </a>
                <CopyEmail email={site.email} />
              </div>
              <p className="mt-6 text-sm text-muted">
                {site.email} · {site.location}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name} — Frontend & Full-Stack Developer
          </p>
          <div className="flex gap-4">
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LinkedIn
            </a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
