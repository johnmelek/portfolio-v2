import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { ASSETS } from "@/assets";

interface HomeProps {
  t: (k: string) => string;
}

export function Home({ t }: HomeProps) {
  return (
    <>
      <main>
        <section className="hero">
          <div className="left">
            <div>
              <div className="kick" dangerouslySetInnerHTML={{ __html: t("h.kick") }} />
              <h1 className="display-type" dangerouslySetInnerHTML={{ __html: t("h.title") }} />
              <p className="sub" dangerouslySetInnerHTML={{ __html: t("h.sub") }} />
              <div className="cta">
                <Link className="btn fill" to="/portfolio-v2/work">
                  <span dangerouslySetInnerHTML={{ __html: t("g.see.work") }} />
                </Link>
                <Link className="btn" to="/portfolio-v2/contact">
                  <span dangerouslySetInnerHTML={{ __html: t("g.open.channel") }} />
                </Link>
              </div>
            </div>
            <div className="marq" style={{ marginTop: 40 }}>
              <div className="track">
                <span dangerouslySetInnerHTML={{ __html: t("h.marq") }} />
                <span dangerouslySetInnerHTML={{ __html: t("h.marq") }} />
              </div>
            </div>
          </div>
          <div className="photo">
            <div className="photo-frame">
              <img src={ASSETS.johnMelek} alt="John Melek" />
              <div className="photo-glitch" />
              <div className="photo-tag" dangerouslySetInnerHTML={{ __html: t("h.tag") }} />
            </div>
          </div>
        </section>

        <section className="sec rv">
          <div className="metrics">
            <div className="metric">
              <div className="v">
                70<span className="u">+</span>
              </div>
              <div className="k">{t("m.sites")}</div>
            </div>
            <div className="metric">
              <div className="v">
                12<span className="u">k</span>
              </div>
              <div className="k">{t("m.records")}</div>
            </div>
            <div className="metric">
              <div className="v">
                0<span className="u">{t("m.keys.unit")}</span>
              </div>
              <div className="k">{t("m.keys")}</div>
            </div>
            <div className="metric">
              <div className="v">
                1<span className="u">{t("m.day.unit")}</span>
              </div>
              <div className="k">{t("m.unblock")}</div>
            </div>
          </div>
        </section>

        <section className="sec invert rv">
          <div className="sec-head">
            <span className="no" dangerouslySetInnerHTML={{ __html: t("sec.approach") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("s.approach") }} />
          </div>
          <div className="appr">
            <div className="c">
              <div className="n">01</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("a1.t") }} />
              <p dangerouslySetInnerHTML={{ __html: t("a1.p") }} />
            </div>
            <div className="c">
              <div className="n">02</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("a2.t") }} />
              <p dangerouslySetInnerHTML={{ __html: t("a2.p") }} />
            </div>
            <div className="c">
              <div className="n">03</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("a3.t") }} />
              <p dangerouslySetInnerHTML={{ __html: t("a3.p") }} />
            </div>
          </div>
          <blockquote className="pull">
            <span dangerouslySetInnerHTML={{ __html: t("h.principle.quote") }} />
            <small dangerouslySetInnerHTML={{ __html: t("h.principle.label") }} />
          </blockquote>
        </section>

        <section className="sec rv">
          <div className="sec-head">
            <span className="no" dangerouslySetInnerHTML={{ __html: t("sec.log") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("s.fieldlog") }} />
            <span className="note" dangerouslySetInnerHTML={{ __html: t("s.note.request") }} />
          </div>
          <article className="case">
            <div className="top">
              <span className="id">
                {t("fl.case")} 001
              </span>
              <h3 dangerouslySetInnerHTML={{ __html: t("fl.c1.t") }} />
            </div>
            <div className="body">
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("fl.result") }} />
              <p className="res" dangerouslySetInnerHTML={{ __html: t("fl.c1.r") }} />
            </div>
          </article>
          <article className="case">
            <div className="top">
              <span className="id">
                {t("fl.case")} 002
              </span>
              <h3 dangerouslySetInnerHTML={{ __html: t("fl.c2.t") }} />
            </div>
            <div className="body">
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("fl.result") }} />
              <p className="res" dangerouslySetInnerHTML={{ __html: t("fl.c2.r") }} />
            </div>
          </article>
          <div className="cta" style={{ marginTop: 26 }}>
            <Link className="btn" to="/portfolio-v2/fieldlog">
              <span dangerouslySetInnerHTML={{ __html: t("g.read.log") }} />
            </Link>
          </div>
        </section>

        <section className="sec invert rv">
          <div className="sec-head">
            <span className="no" dangerouslySetInnerHTML={{ __html: t("sec.work") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("s.work") }} />
            <span className="note" dangerouslySetInnerHTML={{ __html: t("s.note.sample") }} />
          </div>
          <div className="work-list">
            <Link className="work-row" to="/portfolio-v2/projects/edgesync">
              <span className="yr">2026</span>
              <span className="ttl">
                Automotive group, data reconciliation
                <small>Recovered 1,830 records across 12 dealerships after the incremental sync died.</small>
              </span>
              <span className="arr">→</span>
            </Link>
            <Link className="work-row" to="/portfolio-v2/projects/atlasdeploy">
              <span className="yr">2025</span>
              <span className="ttl">
                Multi-site release, wave orchestration
                <small>Pushed a version across locations in waves with verified rollback, no full outage.</small>
              </span>
              <span className="arr">→</span>
            </Link>
            <Link className="work-row" to="/portfolio-v2/projects/pulse">
              <span className="yr">2025</span>
              <span className="ttl">
                Client-site uptime monitor
                <small>Left a live health monitor behind: response time, cert expiry, SSE status.</small>
              </span>
              <span className="arr">→</span>
            </Link>
            <Link className="work-row" to="/portfolio-v2/projects/fieldconsole">
              <span className="yr">2024</span>
              <span className="ttl">
                Fleet ops console
                <small>Live deploy console with WebSocket status and a streaming log tail.</small>
              </span>
              <span className="arr">→</span>
            </Link>
            <Link className="work-row" to="/portfolio-v2/projects/quoteforge">
              <span className="yr">2024</span>
              <span className="ttl">
                Internal-tool generator
                <small>Turned a plain sentence into a working single-file app, offline.</small>
              </span>
              <span className="arr">→</span>
            </Link>
            <Link className="work-row" to="/portfolio-v2/projects/recon">
              <span className="yr">2023</span>
              <span className="ttl">
                Scoped recon and surface map
                <small>Declared-scope recon with safe local scanning, rendered as a graph.</small>
              </span>
              <span className="arr">→</span>
            </Link>
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
