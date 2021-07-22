export const getOffsetTop = ($el) => {
  const body = document.body.getBoundingClientRect();
  const el = $el.getBoundingClientRect();
  return el.top - body.top;
};

export const konami = (done) => {
  const k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let i = 0;

  const onKeydown = (e) => {
    i += 1;
    if (e.keyCode === k[i]) {
      if (i === k.length) {
        done();
        i = 0;
        return true;
      }
    } else {
      i = 0;
    }
    return false;
  };

  document.addEventListener('keydown', onKeydown);
};
