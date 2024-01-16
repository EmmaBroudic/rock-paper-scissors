export function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function computerPickElement(): string {
  let chosenByComputer: string = "";

  let selection = ["Rock", "Paper", "Scissors"];

  let randomNumber = random(0, 2)
  chosenByComputer = selection[randomNumber];

  return chosenByComputer;
}