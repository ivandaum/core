export default class {
  constructor() {
    this.callbacks = [];
  }

  static createIndex() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  addQueue(func) {
    const index = this.createIndex();
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

  doCallbacks() {
    this.callbacks.forEach((key) => {
      if (this.callbacks[key]) {
        this.callbacks[key]();
      }
    });
  }
}
