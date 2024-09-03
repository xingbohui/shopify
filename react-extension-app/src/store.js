import { action, observable } from "mobx";

class Store {
  @observable points = 0;

  //  =====================事件=====================
  // 下拉刷新
  @action updateOpint = (item) => {
    this.points = item.isCutOpint
      ? this.points + item.point
      : this.points - item.point;

      
    window.localStorage.setItem("currPoint", this.points);
  };
}

export const commonStore = new Store();
