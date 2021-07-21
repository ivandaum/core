import Manager from './Manager';

class RafManager extends Manager {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.raf = requestAnimationFrame(this.render.bind(this));
    this.doCallbacks();
  }
}

export default new RafManager();
