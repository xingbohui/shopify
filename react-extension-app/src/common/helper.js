export let currPoint = 1000;

export const addPoint = (num) => {
  const newPoint = window.localStorage.getItem("currPoint");
  num &&
    window.localStorage.setItem(
      "currPoint",
      Number(newPoint || currPoint) + num
    );
};

export const cutPoint = (num) => {
  const newPoint = window.localStorage.getItem("currPoint");
  num && window.localStorage.setItem("currPoint", Number(newPoint) - num);
};
