import { writable } from "svelte/store";
import { keepSelectedElements } from '$lib/keepSelectedElements';
import { battleGame } from '$lib/battleGame';
import { onMount } from 'svelte';

interface TotalScore {
    id: number;
    total: number;
}

export const keepScore = writable<TotalScore[]>([]);