export function buttonImage(element: string): string {

    let result: string;

    if (element === "Rock") {
        return result = "src/images/icon-rock.svg";
    } else if (element === "Paper") {
        return result = "src/images/icon-paper.svg";
    } else if (element === "Scissors") {
        return result = "src/images/icon-scissors.svg"
    } else {
        return result = "";
    }
}

export function buttonImageAlt(element: string): string {

    let result: string;

    if (element === "Rock") {
        return result = "Rock";
    } else if (element === "Paper") {
        return result = "Paper";
    } else if (element === "Scissors") {
        return result = "Scissors"
    } else {
        return result = "";
    }
}

export function buttonId(element: string): string {

    let result: string;

    if (element === "Rock") {
        return result = "button-red";
    } else if (element === "Paper") {
        return result = "button-blue";
    } else if (element === "Scissors") {
        return result = "button-yellow"
    } else {
        return result = "";
    }
}