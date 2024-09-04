import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  points = 0;

  //  =====================事件=====================
  updateOpint = (item) => {
    this.points = item.isCutOpint
      ? this.points + item.point
      : this.points - item.point;
    console.log(12, this.points);
    // window.localStorage.setItem("currPoint", this.points);
  };
}

export const commonStore = new Store();
