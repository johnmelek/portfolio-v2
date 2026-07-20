import { SocialCard } from "@/components/ui/social-card";
import { SOCIAL } from "@/components/ui/social-card";

// The three real channels, wired into the shadcn SocialCard component.
// Used in the footer (end of every page) and the contact page.
export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { ...SOCIAL.linkedin, label: "LinkedIn", className: "li", variant: "li" as const, delay: "0s" },
    { ...SOCIAL.email, label: "Email", className: "em", variant: "em" as const, delay: ".06s" },
    { ...SOCIAL.github, label: "GitHub", className: "gh", variant: "gh" as const, delay: ".12s" },
  ];
  return (
    <SocialCard
      className={className}
      socialLinks={links.map((l) => ({
        href: l.href,
        icon: l.icon,
        label: l.label,
        variant: l.variant,
        delay: l.delay,
      }))}
    />
  );
}
