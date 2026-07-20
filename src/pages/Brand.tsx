import { Footer } from "@/components/Footer";
import { ASSETS } from "@/assets";

interface BrandProps {
  t: (k: string) => string;
}

export function Brand({ t }: BrandProps) {
  return (
    <>
      <main>
        <section className="sec" style={{ paddingTop: 120 }}>
          <div className="sec-head">
            <span className="no" dangerouslySetInnerHTML={{ __html: t("sec.brand") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("b.title") }} />
          </div>
          <p className="sub" style={{ maxWidth: "60ch", color: "var(--ink-2)", fontSize: 17, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: t("b.intro") }} />

          <div className="brand-grid">
            <div className="brand-card">
              <div className="brand-logo">
                <img src={ASSETS.logo} alt="JM monogram" />
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: t("b.monogram") }} />
              <p dangerouslySetInnerHTML={{ __html: t("b.monogram.p") }} />
            </div>
            <div className="brand-card">
              <h3 dangerouslySetInnerHTML={{ __html: t("b.palette") }} />
              <p dangerouslySetInnerHTML={{ __html: t("b.palette.p") }} />
              <div className="swatches" style={{ marginTop: 14 }}>
                <span style={{ background: "#0a0a0b" }} />
                <span style={{ background: "#f4f1ea" }} />
                <span style={{ background: "#ff4d2e" }} />
                <span style={{ background: "#2e6bff" }} />
              </div>
            </div>
            <div className="brand-card">
              <h3 dangerouslySetInnerHTML={{ __html: t("b.type") }} />
              <p dangerouslySetInnerHTML={{ __html: t("b.type.p") }} />
              <div className="type-show" style={{ marginTop: 12 }}>
                Ag
                <br />
                <span>JetBrains Mono</span>
              </div>
            </div>
          </div>

          <div className="sec-head" style={{ marginTop: 60 }}>
            <span className="no" dangerouslySetInnerHTML={{ __html: t("b.use") }} />
            <h2 dangerouslySetInnerHTML={{ __html: t("b.use") }} />
          </div>
          <ul className="brand-rules">
            <li dangerouslySetInnerHTML={{ __html: t("b.r1") }} />
            <li dangerouslySetInnerHTML={{ __html: t("b.r2") }} />
            <li dangerouslySetInnerHTML={{ __html: t("b.r3") }} />
            <li dangerouslySetInnerHTML={{ __html: t("b.r4") }} />
          </ul>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
