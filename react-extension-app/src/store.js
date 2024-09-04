import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  points = window.localStorage.getItem("currPoint") || 0;

  //  =====================事件=====================
  updateOpint = (item) => {
    if (Math.abs(item.point) > 0) {
      this.points = item.isCutOpint
        ? Number(this.points) - Number(item.point)
        : Number(this.points) + Number(item.point);

      window.localStorage.setItem("currPoint", this.points);
    }
  };
}

export const commonStore = new Store();
