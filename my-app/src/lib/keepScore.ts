import { writable } from "svelte/store";

interface TotalScore {
    id: number;
    total: number;
}

export const keepScore = writable<TotalScore[]>([]);