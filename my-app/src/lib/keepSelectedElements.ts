import { writable } from "svelte/store";

interface MyDataItem {
    id: number;
    selectByUser: string;
    chosenByComputer: string;
}

// Exportez directement le store, pas une fonction
export const keepSelectedElements = writable<MyDataItem[]>([]);

/*import { writable } from "svelte/store";



interface MyDataItem {
    id: number;
    selectByUser: string;
    chosenByComputer: string;
}
/*
export function keepSelectedElements(key: string, defaultValue: MyDataItem[]) {
    const storedValue = localStorage.getItem(key);
    const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue;

    const store = writable(initialValue);

    store.subscribe((value) => {
        localStorage.setItem(key, JSON.stringify(value));
    });

    return store;
}

export const myDataStore = keepSelectedElements("myData", []);*/
/*


export function keepSelectedElements(selectByUser: string, chosenByComputer: string): any {
    /*const elementsSelected = writable([
        //{
            selectByUser,
            chosenByComputer,
            battleGame(selectByUser, chosenByComputer)
        //}
    ])*/
/*
    const elementsSelected = [selectByUser, chosenByComputer];

    console.log(battleGame(elementsSelected[0], elementsSelected[1]));
    console.log(elementsSelected);
    let test: any = writable(elementsSelected);
    console.log(test);
    return test;  
}
*/
//export default elementsSelected; // Exporter le store
 // Exporter le store