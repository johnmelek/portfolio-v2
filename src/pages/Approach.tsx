import { Footer } from "@/components/Footer";

interface ApproachProps {
  t: (k: string) => string;
}

export function Approach({ t }: ApproachProps) {
  return (
    <>
      <main>
        <section className="sec invert" style={{ paddingTop: 120 }}>
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
            <div className="c">
              <div className="n">04</div>
              <h3 dangerouslySetInnerHTML={{ __html: t("a4.t") }} />
              <p dangerouslySetInnerHTML={{ __html: t("a4.p") }} />
            </div>
          </div>
          <div className="sec-head" style={{ marginTop: 60 }}>
            <span className="no" dangerouslySetInnerHTML={{ __html: t("sec.method") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("s.method") }} />
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
