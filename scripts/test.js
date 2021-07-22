export const isFunction = (obj) => obj && {}.toString.call(obj) === '[object Function]';

export const isInt = (number) => typeof number === 'number';
