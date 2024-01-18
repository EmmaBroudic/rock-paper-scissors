<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { keepScore } from '$lib/keepScore';
    import { battleGameResultText } from '$lib/battleGame';
    import { battleGame } from '$lib/battleGame';
    import { Link } from "svelte-routing";

    // bloc de code dans lequel le score est storé
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

<div class="picked-element">
    {#each $myData as item (item.id)}
        <p>{battleGameResultText(item.result)}</p>
    {/each}
    <Link to="/"><button on:click={() => clearData()}>Play again</button></Link>
</div>