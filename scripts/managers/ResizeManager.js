import Manager from './Manager';

class ResizeManager extends Manager {
  constructor() {
    super();
    window.addEventListener('resize', () => this.doCallbacks());
  }
}

export default new ResizeManager();
