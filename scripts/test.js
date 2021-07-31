export const isFunction = (a) => a && {}.toString.call(a) === '[object Function]';

export const isInt = (a) => typeof a === 'number';

export const isArray = (a) => Array.isArray(a) || a instanceof Array;

export const isObject = (a) => a instanceof Object;