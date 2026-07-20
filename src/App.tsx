import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { NavOverlay } from "@/components/NavOverlay";
import { useI18n } from "@/i18n";
import { useMotion } from "@/hooks/useMotion";
import { Home } from "@/pages/Home";
import { Work } from "@/pages/Work";
import { Projects } from "@/pages/Projects";
import { Approach } from "@/pages/Approach";
import { FieldLog } from "@/pages/FieldLog";
import { Brand } from "@/pages/Brand";
import { Contact } from "@/pages/Contact";
import { ProjectPage } from "@/pages/ProjectPage";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function App() {
  const { lang, setLang, t, LANGS, LABEL } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useMotion();

  // track scroll for topbar via a light listener (useMotion handles the bar)
  return (
    <>
      <ScrollToTop />
      <TopBar
        scrolled={scrolled}
        onMenu={() => setMenuOpen(true)}
        t={t}
        lang={lang}
        setLang={setLang}
        LANGS={LANGS}
        LABEL={LABEL}
      />
      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} t={t} lang={lang} />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/work" element={<Work t={t} />} />
        <Route path="/projects" element={<Projects t={t} />} />
        <Route path="/approach" element={<Approach t={t} />} />
        <Route path="/fieldlog" element={<FieldLog t={t} />} />
        <Route path="/brand" element={<Brand t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
        <Route path="/projects/:slug" element={<ProjectPage t={t} />} />
      </Routes>
    </>
  );
}
