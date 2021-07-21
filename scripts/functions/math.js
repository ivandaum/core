export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const range = (input, min, max) => ((input - min) * 100) / (max - min);

export const lerp = (v0, v1, t) => (1 - t) * v0 + t * v1;

export const isFunction = (obj) => obj && {}.toString.call(obj) === '[object Function]';
