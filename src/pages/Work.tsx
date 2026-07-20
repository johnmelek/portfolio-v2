import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

interface WorkProps {
  t: (k: string) => string;
}

const ROWS = [
  { yr: "2026", key: "w.c1.t", sub: "w.c1.s", slug: "edgesync" },
  { yr: "2025", key: "w.c2.t", sub: "w.c2.s", slug: "atlasdeploy" },
  { yr: "2025", key: "w.c3.t", sub: "w.c3.s", slug: "pulse" },
  { yr: "2024", key: "w.c4.t", sub: "w.c4.s", slug: "fieldconsole" },
  { yr: "2024", key: "w.c5.t", sub: "w.c5.s", slug: "quoteforge" },
  { yr: "2023", key: "w.c6.t", sub: "w.c6.s", slug: "recon" },
];

export function Work({ t }: WorkProps) {
  return (
    <>
      <main>
        <section className="sec" style={{ paddingTop: 120 }}>
          <div className="sec-head">
            <span className="no" dangerouslySetInnerHTML={{ __html: t("sec.work") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("s.work") }} />
            <span className="note" dangerouslySetInnerHTML={{ __html: t("s.note.sample") }} />
          </div>
          <div className="work-list">
            {ROWS.map((r) => (
              <Link key={r.slug} className="work-row" to={`/portfolio-v2/projects/${r.slug}`}>
                <span className="yr">{r.yr}</span>
                <span className="ttl">
                  {t(r.key)}
                  <small>{t(r.sub)}</small>
                </span>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
          <div className="cta" style={{ marginTop: 30 }}>
            <Link className="btn fill" to="/portfolio-v2/projects">
              <span dangerouslySetInnerHTML={{ __html: t("g.see.set") }} />
            </Link>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
