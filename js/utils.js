export const getElements = (selector, scope = document) => {
  return Array.from(scope.querySelectorAll(selector));
};
