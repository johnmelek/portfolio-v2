import { useEffect } from "react";

// Mirrors the OG main.js behaviors: scroll progress bar, topbar .scrolled,
// reveal-on-scroll, hero photo parallax, live UTC clock.
export function useMotion() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // progress bar + scrolled topbar
    const prog = document.createElement("div");
    prog.className = "progress";
    document.body.appendChild(prog);
    const topbar = document.querySelector(".topbar");
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
      if (topbar) topbar.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // live clock
    const clk = document.querySelector(".clk");
    let timer: number | undefined;
    if (clk) {
      const tick = () => {
        clk.textContent = new Date().toISOString().slice(11, 19) + " UTC";
      };
      tick();
      timer = window.setInterval(tick, 1000);
    }

    // reveal
    const els = document.querySelectorAll(".rv");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((e) => io.observe(e));
    }

    // hero photo parallax
    const photo = document.querySelector<HTMLElement>(".hero .photo img");
    if (photo && !reduce) {
      let ticking = false;
      const onP = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          photo.style.transform = `scale(1.04) translateY(${window.scrollY * 0.06}px)`;
          ticking = false;
        });
      };
      window.addEventListener("scroll", onP, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("scroll", onP);
        if (timer) clearInterval(timer);
        prog.remove();
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearInterval(timer);
      prog.remove();
    };
  }, []);
}
