import Manager from './Manager';

class ResizeManager extends Manager {
  constructor() {
    super();
    window.addEventListener('resize', () => this.processQueue());
  }
}

export default new ResizeManager();
