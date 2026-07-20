import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

interface ProjectsProps {
  t: (k: string) => string;
}

const SET = [
  { n: "01", slug: "edgesync", name: "EdgeSync", subKey: "set.es" },
  { n: "02", slug: "atlasdeploy", name: "AtlasDeploy", subKey: "set.at" },
  { n: "03", slug: "pulse", name: "Pulse", subKey: "set.pl" },
  { n: "04", slug: "fieldconsole", name: "FieldConsole", subKey: "set.fc" },
  { n: "05", slug: "quoteforge", name: "QuoteForge", subKey: "set.qf" },
  { n: "06", slug: "recon", name: "ReconPlanner", subKey: "set.rc" },
];

export function Projects({ t }: ProjectsProps) {
  return (
    <>
      <main>
        <section className="sec" style={{ paddingTop: 120 }}>
          <div className="sec-head">
            <span className="no" dangerouslySetInnerHTML={{ __html: t("sec.set") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("s.set") }} />
            <span className="note" dangerouslySetInnerHTML={{ __html: t("s.set.note") }} />
          </div>
          <div className="work-list">
            {SET.map((p) => (
              <Link key={p.slug} className="work-row" to={`/portfolio-v2/projects/${p.slug}`}>
                <span className="yr">{p.n}</span>
                <span className="ttl">
                  {p.name}
                  <small>{t(p.subKey)}</small>
                </span>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
