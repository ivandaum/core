export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const range = (input, min, max) => ((input - min) * 100) / (max - min);

export const lerp = (v0, v1, t) => (1 - t) * v0 + t * v1;

export const createUniqueIndex = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export const distance2d = (p1, p2) => Math.sqrt((Math.pow) + (Math.pow(p2[1] - p1[1], 2)));

export const roundFloat = (d) => Math.floor(d * 100) * 0.01;

export const shuffleArray = (a) => {
  for (let i = a.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
};