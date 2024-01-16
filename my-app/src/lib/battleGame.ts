export function battleGame(userSelectedElement: any, computerSelectedElement: any): string {
    let result: string = "";

    if (userSelectedElement === computerSelectedElement) {
        result = "match nul";
    }
    else if ((userSelectedElement === "Paper" && computerSelectedElement === "Rock") || (userSelectedElement === "Rock" && computerSelectedElement === "Scissors") || (userSelectedElement === "Scissors" && computerSelectedElement === "Paper")) {
        result = "user gagne";
    } else {
        result = "user perd";
    }

    console.log(result)

    return result;
}