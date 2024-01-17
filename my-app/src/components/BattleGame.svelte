<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { battleGameResultText } from '$lib/battleGame';
    import { battleGame } from '$lib/battleGame';
    import { keepScore } from '$lib/keepScore';
    import PlayAgain from './PlayAgain.svelte'
    import { onMount } from 'svelte';

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

    onMount(() => {
        totalScore = $keepScore.reduce((acc, score) => acc + score.total, 0);
    });
</script>

<style>
    #battle-game {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    #buttons-battle {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    button {
        margin: 30px;
    }

    .picked-element {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
    }
</style>

<div id="battle-game">
    <div id="buttons-battle">
        {#each $myData as item (item.id)}  
            <div class="picked-element">
                <p>YOU PICKED</p>
                <button>{item.selectByUser}</button>
            </div>
        {/each}
        <div class="picked-element">
            {#each $myData as item (item.id)}
                <p>{battleGameResultText(item.result)}</p>
            {/each}
            <PlayAgain />
        </div>
        {#each $myData as item (item.id)}
            <div class="picked-element">
                <p>THE HOUSE PICKED</p>
                <button>{item.chosenByComputer}</button>
            </div>
        {/each}
    </div>
</div>