// BookElements.ts
import { writable } from "svelte/store";

// Créer un store avec des données initiales
const BookElements = writable([
    {
        id: 1,
        title: "The Way of Kings",
        author: "Brandon Sanderson"
    }
]);

export default BookElements; // Exporter le store
