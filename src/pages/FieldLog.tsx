import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

interface FieldLogProps {
  t: (k: string) => string;
}

export function FieldLog({ t }: FieldLogProps) {
  return (
    <>
      <main>
        <section className="sec" style={{ paddingTop: 120 }}>
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
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("fl.situation") }} />
              <p dangerouslySetInnerHTML={{ __html: t("fl.c1.s") }} />
            </div>
            <div className="body">
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("fl.approach") }} />
              <p dangerouslySetInnerHTML={{ __html: t("fl.c1.a") }} />
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
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("fl.situation") }} />
              <p dangerouslySetInnerHTML={{ __html: t("fl.c2.s") }} />
            </div>
            <div className="body">
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("fl.approach") }} />
              <p dangerouslySetInnerHTML={{ __html: t("fl.c2.a") }} />
            </div>
            <div className="body">
              <div className="lbl" dangerouslySetInnerHTML={{ __html: t("fl.result") }} />
              <p className="res" dangerouslySetInnerHTML={{ __html: t("fl.c2.r") }} />
            </div>
          </article>
          <div className="cta" style={{ marginTop: 26 }}>
            <Link className="btn fill" to="/portfolio-v2/contact">
              <span dangerouslySetInnerHTML={{ __html: t("g.see.work") }} />
            </Link>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
