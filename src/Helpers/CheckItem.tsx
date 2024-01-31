import { check } from "./Winning";
function addClassName(array: Array<number>) {
  array.forEach((item) => {
    document.querySelector(`#click${item}`)!.classList.add("changeBg");
  });
}

export function chec() {
  if (check()) {
    addClassName(check()!);
  }
}
