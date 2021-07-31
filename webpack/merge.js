const isArray = a => Array.isArray(a) || a instanceof Array;

const merge = (target, source) => {
  if (isArray(target) && isArray(source)) return target.concat(source);

  const a = Object.assign({}, target);
  const b = Object.assign({}, source);

  Object.keys(b).forEach((k) => {
    if (!a[k]) {
      a[k] = b[k];
    } else {
      a[k] = merge(a[k], b[k]);
    }
  });

  return a;
};

module.exports = (target, sources) => {
  let config = target;
  for (let i = 0; i < sources.length; i += 1) {
    config = merge(Object.assign({}, config), sources[i]);
  }
  return config;
};