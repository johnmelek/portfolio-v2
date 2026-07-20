import { Link } from "react-router-dom";
import { SOCIAL } from "@/components/ui/social-card";
import { ASSETS } from "@/assets";

interface TopBarProps {
  scrolled: boolean;
  onMenu: () => void;
  t: (k: string) => string;
  lang: string;
  setLang: (l: "en" | "fr" | "es") => void;
  LANGS: Array<"en" | "fr" | "es">;
  LABEL: Record<string, string>;
}

export function TopBar({ scrolled, onMenu, t, lang, setLang, LANGS, LABEL }: TopBarProps) {
  return (
    <header className={`topbar${scrolled ? " scrolled" : ""}`}>
      <Link to="/" className="brand">
        <img className="logo" src={ASSETS.logo} alt="JM" />
        JOHN MELEK
      </Link>
      <span className="role" data-i18n="nav.role">
        {t("nav.role")}
      </span>
      <span className="clk">--:--:-- UTC</span>
      <span className="sig">{t("nav.available")}</span>
      <span className="lang">
        {LANGS.map((l, i) => (
          <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
            {i > 0 && <span className="sep" />}
            <button className={l === lang ? "active" : ""} onClick={() => setLang(l)}>
              {LABEL[l]}
            </button>
          </span>
        ))}
      </span>
      <button className="menu-btn" data-i18n="nav.menu" onClick={onMenu}>
        {t("nav.menu")}
      </button>
    </header>
  );
}
