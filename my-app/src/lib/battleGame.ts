export function battleGame(userSelectedElement: any, computerSelectedElement: any): number {
    let result: number = 0;

    if (userSelectedElement === computerSelectedElement) {
        result += 0;
    }
    else if ((userSelectedElement === "Paper" && computerSelectedElement === "Rock") || (userSelectedElement === "Rock" && computerSelectedElement === "Scissors") || (userSelectedElement === "Scissors" && computerSelectedElement === "Paper")) {
        result += 1;
    } else {
        result -= 1;
    }

    console.log(result)

    return result;
}