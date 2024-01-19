<script lang="ts">
    import { keepScore } from '$lib/keepScore';
    import { onMount } from 'svelte';

    // bloc de code dans lequel le score est calculé
    
    let myData = $keepScore;
    let totalScore = 0;

    onMount(() => {
        totalScore = $keepScore.reduce((acc, score) => acc + score.total, 0);
    });
</script>

<style>
     #bloc-score {
        background-color: white;
        color: grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:30px;
        border-radius: 10px;
     }
</style>

<div id="bloc-score">
    {#if myData.length > 0}
        <p>Score</p>
        <p>{totalScore}</p>
    {:else}
        <p>Score</p>
        <p>0</p>
    {/if}
</div>