import type { Project } from "@/data/site";

/** Abstract UI mockup for each project — no client screenshots needed. Decorative only. */
export default function ProjectPreview({ type }: { type: Project["preview"] }) {
  return (
    <div className="preview" aria-hidden>
      <div className="preview-bar">
        <i /> <i /> <i />
      </div>
      <div className="preview-body">{bodies[type]}</div>
    </div>
  );
}

const Bars = ({ heights }: { heights: number[] }) => (
  <div className="flex h-full items-end gap-1.5">
    {heights.map((h, i) => (
      <span key={i} className="pv-bar flex-1" style={{ height: `${h}%` }} />
    ))}
  </div>
);

const Rows = ({ n, cols = 4 }: { n: number; cols?: number }) => (
  <div className="space-y-1.5">
    {Array.from({ length: n }).map((_, r) => (
      <div key={r} className="flex gap-2">
        {Array.from({ length: cols }).map((_, c) => (
          <span key={c} className={`pv-line ${c === 0 ? "w-1/3" : "flex-1"} ${r === 0 ? "pv-strong" : ""}`} />
        ))}
      </div>
    ))}
  </div>
);

const bodies: Record<Project["preview"], React.ReactNode> = {
  dashboard: (
    <div className="grid h-full grid-cols-[18%_1fr] gap-2">
      <div className="pv-panel space-y-1.5 p-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`pv-line block ${i === 1 ? "pv-accent" : ""}`} />
        ))}
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-2">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="pv-panel p-1.5">
              <span className="pv-line pv-strong block w-1/2" />
              <span className="pv-line mt-1 block w-3/4" />
            </div>
          ))}
        </div>
        <div className="pv-panel p-2">
          <Bars heights={[40, 65, 50, 80, 60, 90, 70]} />
        </div>
      </div>
    </div>
  ),
  table: (
    <div className="grid h-full grid-rows-[auto_1fr] gap-2">
      <div className="flex gap-2">
        <span className="pv-chip pv-accent" />
        <span className="pv-chip" />
        <span className="pv-chip" />
      </div>
      <div className="pv-panel p-2">
        <Rows n={5} />
      </div>
    </div>
  ),
  tour: (
    <div className="relative h-full">
      <div className="pv-panel h-full p-2 opacity-60">
        <Rows n={4} cols={3} />
      </div>
      <span className="pv-spot" />
      <div className="pv-pop">
        <span className="pv-line pv-strong block w-2/3" />
        <span className="pv-line mt-1 block" />
        <span className="pv-chip pv-accent mt-1.5 ml-auto block" />
      </div>
    </div>
  ),
  billing: (
    <div className="grid h-full grid-cols-[1fr_38%] gap-2">
      <div className="pv-panel p-2">
        <Rows n={5} cols={3} />
      </div>
      <div className="pv-panel pv-receipt flex flex-col gap-1.5 p-2">
        <span className="pv-line pv-strong block w-1/2" />
        <span className="pv-line block" />
        <span className="pv-line block" />
        <span className="pv-line block w-3/4" />
        <span className="pv-line pv-accent mt-auto block" />
      </div>
    </div>
  ),
  shop: (
    <div className="grid h-full grid-cols-3 gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="pv-panel flex flex-col p-1.5">
          <span className="pv-img flex-1" />
          <span className="pv-line pv-strong mt-1.5 block w-3/4" />
          <span className={`pv-chip mt-1.5 block w-full ${i === 1 ? "pv-wa" : "pv-accent"}`} />
        </div>
      ))}
    </div>
  ),
  crm: (
    <div className="grid h-full grid-cols-3 gap-2">
      {[3, 2, 4].map((n, c) => (
        <div key={c} className="pv-panel space-y-1.5 p-1.5">
          <span className="pv-line pv-strong block w-1/2" />
          {Array.from({ length: n }).map((_, i) => (
            <span key={i} className={`pv-card block ${c === 1 && i === 0 ? "pv-accent" : ""}`} />
          ))}
        </div>
      ))}
    </div>
  ),
};
