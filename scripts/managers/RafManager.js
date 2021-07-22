import Manager from './Manager';

class RafManager extends Manager {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.raf = requestAnimationFrame(this.render.bind(this));
    this.processQueue();
  }
}

export default new RafManager();
