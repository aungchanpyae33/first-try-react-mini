function DisplayText(para: string, text: string) {
  document.querySelector(para)!.textContent = text;
}
export default DisplayText;

export function Change(currentPlayer: string) {
  currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
  return currentPlayer;
}
