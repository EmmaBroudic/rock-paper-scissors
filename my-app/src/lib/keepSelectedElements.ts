import { writable } from "svelte/store";

interface MyDataItem {
    id: number;
    selectByUser: string;
    chosenByComputer: string;
    result: number;
}

export const keepSelectedElements = writable<MyDataItem[]>([]);