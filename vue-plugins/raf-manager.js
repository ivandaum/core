import Vue from 'vue';

const createUniqueIndex = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

class RafManager {
  constructor() {
    this.callbacks = [];
    this.render();
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

  render(t) {
    this.raf = requestAnimationFrame(this.render.bind(this));
    Object.keys(this.callbacks).forEach((key) => {
      if (this.callbacks[key]) {
        this.callbacks[key](t);
      }
    });
  }
};


Vue.prototype.RafManager = new RafManager();

