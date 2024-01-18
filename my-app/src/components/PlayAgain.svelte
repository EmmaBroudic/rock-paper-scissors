<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { keepScore } from '$lib/keepScore';
    import { battleGameResultText } from '$lib/battleGame';
    import { battleGame } from '$lib/battleGame';
    import { Link } from "svelte-routing";

    let myData = keepSelectedElements;
    let totalScore = 0;

    const currentData = $myData;

    if (currentData.length > 0) {
        const latestData = currentData[0];
        let battleResult: number;

        battleResult = battleGame(latestData.selectByUser, latestData.chosenByComputer);
        const newId = $keepScore.length + 1;
        let scoreToAdd = { id: newId, total: battleResult };
        keepScore.update((prevScore) => [...prevScore, scoreToAdd]);
        totalScore += battleResult;
    }

    function clearData() {
        keepSelectedElements.set([]);;
    }
</script>

<style>
    #bloc-play {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #play-again {
        width: 150px;
        height: 50px;
        border-radius: 10px;
        color: red;
    }
</style>

<div id="bloc-play">
    {#each $myData as item (item.id)}
        <p>{battleGameResultText(item.result)}</p>
    {/each}
    <Link to="/"><button id="play-again" on:click={() => clearData()}>PLAY AGAIN</button></Link>
</div>