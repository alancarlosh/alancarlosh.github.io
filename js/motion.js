import { getElements } from "./utils.js";

const REVEAL_SELECTOR = [
  ".hero-copy",
  ".profile-panel",
  ".summary > div",
  ".section-heading",
  ".project-card",
  ".case-study",
  ".stack-list > div",
  ".cv-card",
  ".contact",
].join(",");

const VISIBLE_CLASS = "is-visible";
const REVEAL_CLASS = "motion-reveal";
const REVEAL_DURATION_MS = 520;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const initMotion = () => {
  const elements = getElements(REVEAL_SELECTOR);

  if (!elements.length || prefersReducedMotion()) {
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add(REVEAL_CLASS);
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 36}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(VISIBLE_CLASS);
        window.setTimeout(() => {
          entry.target.style.transitionDelay = "";
        }, REVEAL_DURATION_MS);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14,
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
};
