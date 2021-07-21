import RafManager from './RafManager';

class ScrollManager {
  constructor() {
    this.$app = window;
    RafManager.addQueue(this.onScroll.bind(this));
  }

  onScroll() {
    this.oldScroll = this.scroll;
    this.scroll = this.getScrollTop();
    this.scrollEased += (this.scroll - this.scrollEased) * 0.3;
    this.spinY = this.scroll - this.oldScroll;
    this.isScrolling = this.spinY !== 0;
  }

  getScrollTop() {
    return window.pageYOffset || this.$app.scrollTop || 0;
  }

  snapTo(y) {
    this.scroll = y;
    this.scrollEased = y;
    this.$app.scrollTo(0, y);
  }
}

export default new ScrollManager();
