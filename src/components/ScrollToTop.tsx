import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reset scroll on navigation (OG used full-page reloads; SPA needs this).
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
