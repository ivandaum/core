import { createUniqueIndex } from '../math';

export default class Manager {
  constructor() {
    this.callbacks = [];
  }

  addQueue(func) {
    const index = createUniqueIndex();
    this.callbacks[index] = func;
    return index;
  }

  removeQueue(index) {
    if (this.callbacks[index]) {
      delete this.callbacks[index];
      return true;
    }

    return false;
  }

  processQueue() {
    Object.keys(this.callbacks).forEach((key) => {
      if (this.callbacks[key]) {
        this.callbacks[key]();
      }
    });
  }
}
