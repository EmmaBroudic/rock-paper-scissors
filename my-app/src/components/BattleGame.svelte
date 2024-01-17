<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { battleGame } from '$lib/battleGame';
    import { keepScore } from '$lib/keepScore';
    import { Link } from "svelte-routing";
    import { onMount } from 'svelte';

    let myData = keepSelectedElements;
    let totalScore = 0;

    const currentData = $myData;

    if (currentData.length > 0) {
        // Utilise le dernier élément du tableau, car c'est celui qui a été ajouté le plus récemment
        const latestData = currentData[0];

        let battleResult: number;

        battleResult = battleGame(latestData.selectByUser, latestData.chosenByComputer);

        let scoreToAdd = { id: 1, total: battleResult };

        keepScore.update((prevScore) => [...prevScore, scoreToAdd]);

        totalScore += battleResult; // Mettre à jour le score total
    }

    function clearData() {
        keepSelectedElements.set([]);;
    }

    // Utiliser onMount pour mettre à jour le score total lors du rendu initial
    onMount(() => {
        totalScore = $keepScore.reduce((acc, score) => acc + score.total, 0);
    });
</script>

<div>
    <h1>Battle Game</h1>

    {#each $myData as item (item.id)}
        <button>{item.selectByUser}</button>
        <button>{item.chosenByComputer}</button>
        <p>{item.result}</p>
    {/each}
    <p>Le score total est de : {totalScore}</p>
    <Link to="/"><button on:click={() => clearData()}>Play again</button></Link>
</div>