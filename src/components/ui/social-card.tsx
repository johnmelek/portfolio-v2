import * as React from "react";
import { cn } from "@/lib/utils";

// Social platform identifiers actually used on this site.
export type SocialPlatform = "linkedin" | "github" | "email";

export interface SocialBoxProps {
  href: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
  label: string;
  variant?: "li" | "gh" | "em";
}

export interface SocialCardProps {
  title?: string;
  className?: string;
  socialLinks?: Array<{ href: string; icon: React.ReactNode; className?: string; delay?: string; label: string; variant?: "li" | "gh" | "em" }>;
}

// ---- Brand icons (LinkedIn / GitHub / Email) ---------------------------------
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg" aria-hidden="true">
    <path d="M2 4h20v16H2V4zm2 2v.4l8 5.2 8-5.2V6H4zm16 2.8V18h-2V9.1l-6 3.9-6-3.9V18H4V8.8l8 5.2 8-5.2z" />
  </svg>
);

// Brand hex colors (mirror OG: LinkedIn #2e6bff, GitHub #ff6a00, Email = accent).
export const SOCIAL = {
  linkedin: {
    href: "https://www.linkedin.com/in/john-melek-182086256?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    hex: "#2e6bff",
  },
  github: {
    href: "https://github.com/johnmelek",
    icon: <GitHubIcon />,
    label: "GitHub",
    hex: "#ff6a00",
  },
  email: {
    href: "mailto:john.melek@jmai.run.place",
    icon: <EmailIcon />,
    label: "Email",
    hex: "#ff4d2e",
  },
} as const;

// ---- Component -----------------------------------------------------------------
const SocialBox = React.forwardRef<HTMLAnchorElement, SocialBoxProps>(
  ({ href, icon, className, delay, label, variant, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        className={cn(
          "social-box group relative inline-flex items-center gap-3 overflow-hidden rounded-sm border-2 bg-transparent px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-[3px] sm:text-sm",
          variant,
          className
        )}
        style={delay ? { transitionDelay: delay } : undefined}
        {...props}
      >
        <span className="svg-wrapper flex h-5 w-5 items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current">
          {icon}
        </span>
        <span className="font-semibold">{label}</span>
        <span className="sb-fill absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </a>
    );
  }
);
SocialBox.displayName = "SocialBox";

const SocialCard = React.forwardRef<HTMLDivElement, SocialCardProps>(
  ({ title, socialLinks, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-4", className)}>
        {title && <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--dim)]">{title}</h3>}
        <div className="flex flex-wrap gap-3">
          {socialLinks?.map((link, i) => (
            <SocialBox key={i} {...link} />
          ))}
        </div>
      </div>
    );
  }
);
SocialCard.displayName = "SocialCard";

export { SocialCard, SocialBox };
