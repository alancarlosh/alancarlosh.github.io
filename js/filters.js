import { getElements } from "./utils.js";

const ACTIVE_CLASS = "is-active";
const HIDDEN_CLASS = "is-hidden";
const FILTERING_CLASS = "is-filtering";
const FILTER_EXIT_MS = 120;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setActiveFilter = (filters, activeFilter) => {
  filters.forEach((filter) => {
    const isActive = filter === activeFilter;

    filter.classList.toggle(ACTIVE_CLASS, isActive);
    filter.setAttribute("aria-pressed", String(isActive));
  });
};

const updateProjectVisibility = (cards, activeTag) => {
  cards.forEach((card) => {
    const tags = card.dataset.tags?.split(" ") ?? [];
    const shouldHide = activeTag !== "all" && !tags.includes(activeTag);

    card.classList.toggle(HIDDEN_CLASS, shouldHide);
    card.toggleAttribute("hidden", shouldHide);
  });
};

const animateProjectVisibility = (cards, activeTag) => {
  if (prefersReducedMotion()) {
    updateProjectVisibility(cards, activeTag);
    return;
  }

  cards.forEach((card) => {
    card.classList.add(FILTERING_CLASS);
  });

  window.setTimeout(() => {
    updateProjectVisibility(cards, activeTag);

    requestAnimationFrame(() => {
      cards.forEach((card) => {
        card.classList.remove(FILTERING_CLASS);
      });
    });
  }, FILTER_EXIT_MS);
};

export const initProjectFilters = () => {
  const filters = getElements(".filter");
  const cards = getElements(".project-card");

  if (!filters.length || !cards.length) {
    return;
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const activeTag = filter.dataset.filter;

      setActiveFilter(filters, filter);
      animateProjectVisibility(cards, activeTag);
    });
  });
};
