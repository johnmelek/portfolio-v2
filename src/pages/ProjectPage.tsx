import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/i18n";
import { ASSETS, PROJECT_SHOT } from "@/assets";

// ---------- EdgeSync: conflict console ----------
function EdgeSyncLive({ t }: { t: (k: string) => string }) {
  const [rows, setRows] = useState([
    { id: "C002", a: "a@x.com", b: "b@x.com", c: "a@x.com", conflict: true },
    { id: "C003", a: "0611..", b: "0612..", c: "0612..", conflict: true },
    { id: "C007", a: "Paris", b: "Lyon", c: "Paris", conflict: true },
    { id: "C011", a: "active", b: "closed", c: "active", conflict: true },
  ]);
  const open = rows.filter((r) => r.conflict).length;
  return (
    <div className="world-shell" id="x-reconcile">
      <h4 dangerouslySetInnerHTML={{ __html: t("es.h4") }} />
      <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--dim)", margin: "0 0 14px" }}>
        {t("pj.open")} <span className="rec-count">{open}</span>
      </p>
      <div className="term">
        {rows.map((r, i) => (
          <div key={r.id} className={`rrow${r.conflict ? "" : " resolved"}`}>
            <span className="rid">{r.id}</span>
            <span>{r.a}</span>
            <span className={r.conflict ? "conflict" : ""}>{r.b}</span>
            <span>{r.c}</span>
            <button
              className="resolve"
              disabled={!r.conflict}
              dangerouslySetInnerHTML={{ __html: t("pj.resolve") }}
              onClick={() => setRows((rs) => rs.map((x, j) => (j === i ? { ...x, conflict: false } : x)))}
            />
          </div>
        ))}
      </div>
      {open === 0 && (
        <div className="rec-done" dangerouslySetInnerHTML={{ __html: t("pj.allresolved") }} />
      )}
      <div className="pj-tags">
        <span>
          <a href="https://github.com/johnmelek/edgesync" target="_blank" rel="noopener">
            <span dangerouslySetInnerHTML={{ __html: t("pj.source") }} />
          </a>
        </span>
        <span dangerouslySetInnerHTML={{ __html: t("pj.runs") }} />
        <span dangerouslySetInnerHTML={{ __html: t("pj.nokey") }} />
      </div>
    </div>
  );
}

// ---------- AtlasDeploy: wave dispatch ----------
function AtlasDeployLive({ t }: { t: (k: string) => string }) {
  const [wave, setWave] = useState(0);
  const max = 3;
  const nodes = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="world-shell">
      <h4 dangerouslySetInnerHTML={{ __html: t("at.h4") }} />
      <div className="atlas-grid">
        {nodes.map((n) => {
          const wv = Math.floor(n / 4);
          const live = wv < wave;
          return (
            <div key={n} className={`wnode${live ? " live" : ""}`}>
              <div>{t("pj.site")}{n + 1}</div>
              <div className="wv">
                {t("pj.wave")} {Math.min(wv + 1, max)}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="atlas-go"
        dangerouslySetInnerHTML={{ __html: t("at.go") }}
        onClick={() => setWave((w) => (w >= max ? 0 : w + 1))}
      />
      <div className="atlas-log">
        {wave === 0 && <div className="log-line"><span className="lt">●</span> idle. {t("at.go")}</div>}
        {Array.from({ length: wave }).map((_, w) => (
          <div key={w} className="log-line">
            <span className="lt">▶</span> {t("pj.wave")} {w + 1} deployed · verified rollback armed
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Pulse: oscilloscope ----------
function PulseLive({ t }: { t: (k: string) => string }) {
  const [bars, setBars] = useState<number[]>(() => Array.from({ length: 40 }, () => 20 + Math.random() * 60));
  const [ms, setMs] = useState(142);
  useEffect(() => {
    const id = setInterval(() => {
      setBars((b) => [...b.slice(1), 20 + Math.random() * 60]);
      setMs(120 + Math.floor(Math.random() * 60));
    }, 700);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="world-shell">
      <h4 dangerouslySetInnerHTML={{ __html: t("pl.h4") }} />
      <div className="pulse-bars">
        {bars.map((h, i) => (
          <div key={i} className="pbar" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="pulse-ms">
        response {ms} ms · endpoint up · cert valid
      </div>
    </div>
  );
}

// ---------- FieldConsole: fleet HUD ----------
function FieldConsoleLive({ t }: { t: (k: string) => string }) {
  const [nodes, setNodes] = useState([
    { name: "SITE-01", up: true },
    { name: "SITE-02", up: false },
    { name: "SITE-03", up: true },
    { name: "SITE-04", up: true },
    { name: "SITE-05", up: false },
    { name: "SITE-06", up: true },
  ]);
  const [log, setLog] = useState<string[]>(["● console online · 6 sites tracked"]);
  return (
    <div className="world-shell">
      <h4 dangerouslySetInnerHTML={{ __html: t("fc.h4") }} />
      <div className="con-nodes">
        {nodes.map((n) => (
          <button
            key={n.name}
            className={`node${n.up ? "" : " down"}`}
            onClick={() => {
              setNodes((ns) => ns.map((x) => (x.name === n.name ? { ...x, up: !x.up } : x)));
              setLog((l) => [`${n.name} → ${!n.up ? "ONLINE" : "OFFLINE"}`, ...l].slice(0, 8));
            }}
          >
            <span className="dot" />
            {n.name}
          </button>
        ))}
      </div>
      <div className="con-log">
        {log.map((l, i) => (
          <div key={i} className="log-line">
            <span className="lt">›</span> {l}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- QuoteForge: generator ----------
function QuoteForgeLive({ t }: { t: (k: string) => string }) {
  const [q, setQ] = useState("");
  const [out, setOut] = useState<string | null>(null);
  return (
    <div className="world-shell">
      <h4 dangerouslySetInnerHTML={{ __html: t("qf.h4") }} />
      <input
        className="forge-in"
        placeholder={t("qf.ph")}
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button
        className="forge-go"
        dangerouslySetInnerHTML={{ __html: t("qf.go") }}
        onClick={() => setOut(q || "a form to track test-drives")}
      />
      {out && (
        <div className="forge-out">
          <div className="gen-card">
            <div className="gen-h">app: {out.slice(0, 28)}</div>
            <div className="gen-f">
              fields
              <input defaultValue="name, email, date, notes" readOnly />
            </div>
            <div className="gen-f">
              store
              <input defaultValue="localStorage (offline)" readOnly />
            </div>
            <button className="gen-sub" disabled>
              single-file app ready
            </button>
            <div className="gen-note">no server · no key · runs in browser</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- ReconPlanner: surface map ----------
function ReconLive({ t }: { t: (k: string) => string }) {
  const [active, setActive] = useState<string | null>(null);
  const pins = [
    { name: "api.public", x: 20, y: 30 },
    { name: "admin.panel", x: 60, y: 22 },
    { name: "db.export", x: 78, y: 60 },
    { name: "s3.bucket", x: 40, y: 72 },
    { name: "ssh.gw", x: 12, y: 78 },
  ];
  const cur = pins.find((p) => p.name === active);
  return (
    <div className="world-shell">
      <h4 dangerouslySetInnerHTML={{ __html: t("rc.h4") }} />
      <div className="recon-map">
        {pins.map((p) => (
          <div
            key={p.name}
            className={`pin${active === p.name ? " active" : ""}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            data-name={p.name}
            onClick={() => setActive(p.name)}
          />
        ))}
      </div>
      <div className="recon-panel">
        <div className="rp-h">{t("rc.panel")}</div>
        {cur ? (
          <>
            <div className="rp-b">{cur.name}</div>
            <div>scope: declared · scan: local · nothing leaves the machine</div>
          </>
        ) : (
          <div className="rp-b">select a surface</div>
        )}
      </div>
    </div>
  );
}

const META: Record<
  string,
  { accent: string; sub: string; desc: string; pull: string; pulls: string; runidx: string; cap: string; h4: string; next: string; nextSlug: string; Body: (p: { t: (k: string) => string }) => JSX.Element }
> = {
  edgesync: {
    accent: "#2e6bff", sub: "es.sub", desc: "es.desc", pull: "es.pull", pulls: "es.pulls", runidx: "es.runidx", cap: "es.cap", h4: "es.h4",
    next: "FieldConsole →", nextSlug: "fieldconsole",
    Body: ({ t }) => <EdgeSyncLive t={t} />,
  },
  atlasdeploy: {
    accent: "#ff6a00", sub: "at.sub", desc: "at.desc", pull: "at.pull", pulls: "at.pulls", runidx: "at.runidx", cap: "at.cap", h4: "at.h4",
    next: "Pulse →", nextSlug: "pulse",
    Body: ({ t }) => <AtlasDeployLive t={t} />,
  },
  pulse: {
    accent: "#00e5ff", sub: "pl.sub", desc: "pl.desc", pull: "pl.pull", pulls: "pl.pulls", runidx: "pl.runidx", cap: "pl.cap", h4: "pl.h4",
    next: "FieldConsole →", nextSlug: "fieldconsole",
    Body: ({ t }) => <PulseLive t={t} />,
  },
  fieldconsole: {
    accent: "#39ff14", sub: "fc.sub", desc: "fc.desc", pull: "fc.pull", pulls: "fc.pulls", runidx: "fc.runidx", cap: "fc.cap", h4: "fc.h4",
    next: "QuoteForge →", nextSlug: "quoteforge",
    Body: ({ t }) => <FieldConsoleLive t={t} />,
  },
  quoteforge: {
    accent: "#ff2e9a", sub: "qf.sub", desc: "qf.desc", pull: "qf.pull", pulls: "qf.pulls", runidx: "qf.runidx", cap: "qf.cap", h4: "qf.h4",
    next: "ReconPlanner →", nextSlug: "recon",
    Body: ({ t }) => <QuoteForgeLive t={t} />,
  },
  recon: {
    accent: "#7CFC00", sub: "rc.sub", desc: "rc.desc", pull: "rc.pull", pulls: "rc.pulls", runidx: "rc.runidx", cap: "rc.cap", h4: "rc.h4",
    next: "EdgeSync →", nextSlug: "edgesync",
    Body: ({ t }) => <ReconLive t={t} />,
  },
};

const ORDER = ["edgesync", "atlasdeploy", "pulse", "fieldconsole", "quoteforge", "recon"];

export function ProjectPage({ t }: { t: (k: string) => string }) {
  const { slug } = useParams();
  const { lang } = useI18n();
  const m = META[slug || ""];
  if (!m) return <div style={{ padding: 120 }}>404</div>;
  const skinClass = `sk-${slug}`;
  const n = ORDER.indexOf(slug || "") + 1;

  return (
    <div style={{ ["--accent" as any]: m.accent }}>
      <main className={skinClass}>
        <section className="pj">
          <span className="bignum">{String(n).padStart(2, "0")}</span>
          <Link className="back" to="/portfolio-v2/projects">
            <span dangerouslySetInnerHTML={{ __html: t("pj.back") }} />
          </Link>
          <div className="runidx" dangerouslySetInnerHTML={{ __html: t(m.runidx) }} />
          <h1 className="display-type">{slug === "edgesync" ? "EdgeSync" : slug === "atlasdeploy" ? "AtlasDeploy" : slug === "pulse" ? "Pulse" : slug === "fieldconsole" ? "FieldConsole" : slug === "quoteforge" ? "QuoteForge" : "ReconPlanner"}</h1>
          <div className="sub" dangerouslySetInnerHTML={{ __html: t(m.sub) }} />
          <p className="desc" dangerouslySetInnerHTML={{ __html: t(m.desc) }} />
          <blockquote className="pull">
            <span dangerouslySetInnerHTML={{ __html: t(m.pull) }} />
            <small dangerouslySetInnerHTML={{ __html: t(m.pulls) }} />
          </blockquote>
        </section>

        <div className="pj" style={{ paddingTop: 0 }}>
          <div className="shot">
            <span className="live-tag" dangerouslySetInnerHTML={{ __html: t("pj.live") }} />
            <img src={PROJECT_SHOT[(slug as keyof typeof PROJECT_SHOT) || "edgesync"]} alt={slug || ""} />
            <div className="cap" dangerouslySetInnerHTML={{ __html: t(m.cap) }} />
          </div>
          <m.Body t={t} />
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
