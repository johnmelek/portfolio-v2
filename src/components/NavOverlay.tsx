import { NAV_ITEMS } from "@/data/nav";
import { SOCIAL } from "@/components/ui/social-card";

interface NavOverlayProps {
  open: boolean;
  onClose: () => void;
  t: (k: string) => string;
  lang: string;
}

export function NavOverlay({ open, onClose, t, lang }: NavOverlayProps) {
  return (
    <div className={`nav-overlay${open ? " open" : ""}`} aria-hidden={!open}>
      <div className="nav-top">
        <button className="nav-return" onClick={onClose} data-i18n="nav.return">
          {t("nav.return")}
        </button>
      </div>
      <nav className="nav-links">
        {NAV_ITEMS.map((item, i) => (
          <a key={item.id} href={item.href} className="nav-li" onClick={onClose}>
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            {t(item.i18nKey)}
          </a>
        ))}
      </nav>
      <div className="nav-social">
        <a href={SOCIAL.linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {SOCIAL.linkedin.icon}
          <span>LinkedIn</span>
        </a>
        <a href={SOCIAL.email.href} aria-label="Email">
          {SOCIAL.email.icon}
          <span>Email</span>
        </a>
        <a href={SOCIAL.github.href} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          {SOCIAL.github.icon}
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
