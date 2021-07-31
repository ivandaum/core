export const getOffsetTop = ($el) => {
  const body = document.body.getBoundingClientRect();
  const el = $el.getBoundingClientRect();
  return el.top - body.top;
};

export const observeVisibility = (target, callback, opt = {}) => {
  const observer = new IntersectionObserver((changes) => {
    const [{ isIntersecting }] = changes;
    callback(isIntersecting);
  }, opt);
  observer.observe(target);
};
