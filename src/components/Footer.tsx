import { SocialLinks } from "@/components/SocialLinks";

interface FooterProps {
  t: (k: string) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="foot">
      <div className="big">
        Let us <a href="/portfolio-v2/contact">{t("f.build")}</a>
      </div>
      <div className="meta">
        {t("f.identity")}
        <br />
        john.melek@jmai.run.place
        <br />
        {t("f.selected")}
      </div>
      <div className="foot-social-card">
        <SocialLinks />
      </div>
    </footer>
  );
}
