import { site } from "@/data/site";

/** Professional-mode hero visual: a product dashboard mockup with floating cards. Decorative. */
export default function HeroShowcase() {
  return (
    <div className="showcase" aria-hidden>
      {/* main window */}
      <div className="sc-window">
        <div className="sc-titlebar">
          <i /> <i /> <i />
          <span className="sc-url">app.yourproduct.com/dashboard</span>
        </div>
        <div className="sc-body">
          <aside className="sc-side">
            <span className="sc-logo" />
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`sc-nav ${i === 0 ? "is-active" : ""}`} />
            ))}
          </aside>
          <div className="sc-main">
            <div className="sc-kpis">
              {[
                ["Revenue", "$24.8k", "+12%"],
                ["Orders", "1,284", "+8%"],
                ["Customers", "342", "+21%"],
              ].map(([k, v, d]) => (
                <div key={k} className="sc-kpi">
                  <span className="sc-kpi-label">{k}</span>
                  <span className="sc-kpi-value">{v}</span>
                  <span className="sc-kpi-delta">{d}</span>
                </div>
              ))}
            </div>
            <div className="sc-chart">
              <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="h-full w-full">
                <defs>
                  <linearGradient id="scfill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 80 C30 70 50 76 75 58 S120 40 150 48 S200 20 225 28 S270 12 300 8 V100 H0 Z" fill="url(#scfill)" />
                <path d="M0 80 C30 70 50 76 75 58 S120 40 150 48 S200 20 225 28 S270 12 300 8" fill="none" stroke="var(--accent)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <div className="sc-rows">
              {[0, 1, 2].map((i) => (
                <div key={i} className="sc-row">
                  <span className="sc-dot" />
                  <span className="sc-line w-2/5" />
                  <span className="sc-line w-1/5" />
                  <span className={`sc-badge ${i === 1 ? "is-warn" : ""}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating: profile */}
      <div className="sc-float sc-float-a">
        <span className="sc-avatar">{site.initials}</span>
        <div>
          <p className="text-[13px] leading-tight font-semibold">{site.name}</p>
          <p className="text-[11px] text-muted">Frontend & Full-Stack</p>
        </div>
      </div>

      {/* floating: availability */}
      <div className="sc-float sc-float-b">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </span>
        <div>
          <p className="text-[13px] leading-tight font-semibold">Available for freelance</p>
          <p className="text-[11px] text-muted">Replies within 24h</p>
        </div>
      </div>

      {/* floating: stack */}
      <div className="sc-float sc-float-c">
        {["React", "Next.js", "Node.js"].map((t) => (
          <span key={t} className="sc-chip">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
