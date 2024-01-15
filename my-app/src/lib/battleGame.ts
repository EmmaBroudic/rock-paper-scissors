export function battleGame(userSelectedElement: string, computerSelectedElement: string): string {
    let result: string = "test";

    if (userSelectedElement === computerSelectedElement) {
        console.log("match nul");
    }
    else if ((userSelectedElement === "Paper" && computerSelectedElement === "Rock") || (userSelectedElement === "Rock" && computerSelectedElement === "Scissors") || (userSelectedElement === "Scissors" && computerSelectedElement === "Paper")) {
        console.log("user gagne");
    } else {
        console.log("user perd");
    }

    return result;
}