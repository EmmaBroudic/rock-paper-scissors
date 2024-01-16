<script lang="ts">
    import { onMount } from "svelte";
    import BookElements from '../lib/BookElements'; // Importer le store

    let books: { id: number; title: string; author: string }[] = [];

    // Abonnez-vous au store BookElements
    const unsubscribe = BookElements.subscribe((data: any) => {
        books = data;
    });

    // Assurez-vous de vous désabonner lorsque le composant est démonté
    onMount(() => {
        return () => {
            unsubscribe();
        };
    });
</script>

<div class="book-list">
    {#each books as { id, title, author } (id)}
        <div>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
        </div>
    {/each}
</div>

<style>
    .book-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>