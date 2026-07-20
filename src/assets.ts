// Centralised asset imports so Vite resolves the correct URL under base=/portfolio-v2/.
import johnMelek from "@/assets/john-melek.jpg";
import logo from "@/assets/logo.svg";
import favicon from "@/assets/favicon.png";
import edgesync from "@/assets/edgesync.png";
import fieldconsole from "@/assets/fieldconsole.png";
import quoteforge from "@/assets/quoteforge.png";
import recon from "@/assets/recon.png";
import pulse from "@/assets/pulse.png";
import atlasdeploy from "@/assets/atlasdeploy.png";

export const ASSETS = {
  johnMelek,
  logo,
  favicon,
  edgesync,
  fieldconsole,
  quoteforge,
  recon,
  pulse,
  atlasdeploy,
} as const;

export type ProjectSlug = "edgesync" | "fieldconsole" | "quoteforge" | "recon" | "pulse" | "atlasdeploy";

export const PROJECT_SHOT: Record<ProjectSlug, string> = {
  edgesync,
  fieldconsole,
  quoteforge,
  recon,
  pulse,
  atlasdeploy,
};
