export interface NavItem {
  id: string;
  href: string;
  i18nKey: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "index", href: "/portfolio-v2/", i18nKey: "m.overview" },
  { id: "work", href: "/portfolio-v2/work", i18nKey: "m.work" },
  { id: "projects", href: "/portfolio-v2/projects", i18nKey: "m.set" },
  { id: "approach", href: "/portfolio-v2/approach", i18nKey: "m.approach" },
  { id: "fieldlog", href: "/portfolio-v2/fieldlog", i18nKey: "m.log" },
  { id: "brand", href: "/portfolio-v2/brand", i18nKey: "m.brand" },
  { id: "contact", href: "/portfolio-v2/contact", i18nKey: "m.contact" },
];
