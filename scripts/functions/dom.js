export const getOffsetTop = ($element) => {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = $element.getBoundingClientRect();
  return elemRect.top - bodyRect.top;
};

export const slugify = (string) => string
  .replace(/<(.*?)>/, '-')
  .toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '');

export const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0
    ? document.getSelection().getRangeAt(0)
    : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

export const konami = (callback) => {
  const k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let n = 0;
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === k[n++]) {
      if (n === k.length) {
        callback();
        n = 0;
        return false;
      }
    } else {
      n = 0;
    }
  });
};
