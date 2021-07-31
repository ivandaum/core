export const resize = (el, heightRatio) => {
  const ratio = heightRatio || 0.56;
  const width = el.parentNode.offsetWidth;
  el.width = width + 'px';
  el.height = width * ratio + 'px';
};

export const playPause = (el) => {
  if (el.paused) el.play();
  else el.pause();

  return el.paused; // return video playing or not
};