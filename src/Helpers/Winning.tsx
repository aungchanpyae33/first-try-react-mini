import DisplayText from "./DisplayText";
import { chec } from "./CheckItem";
const Winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let isWin: boolean;
let winner: string;
let cellWin: Array<number>;

export function CheckWinner(array: Array<string>) {
  for (let i = 0; i < Winning.length; i++) {
    const a = array[Winning[i][0]];
    const b = array[Winning[i][1]];
    const c = array[Winning[i][2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      isWin = true;
      winner = a;
      cellWin = Winning[i];
      break;
    }
  }
  if (isWin) {
    isWin = false;
    DisplayText("#win", winner);
    chec();
    cellWin = [];
    return true;
  } else if (!array.includes("")) {
    DisplayText("#win", "Draw");
  }
}

export function check() {
  if (cellWin) {
    const winCell = cellWin;
    return winCell;
  }
}
