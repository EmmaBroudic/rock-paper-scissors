<script lang="ts">
    import { keepScore } from '$lib/keepScore';

    // bloc de code dans lequel le score est calculé
    
    let dataScore = keepScore;
    /*let dataScoreLastest = (dataScore.length) - 1;

    const latestData = dataScore[dataScoreLastest];*/
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
<!--faire un each-->
<div id="bloc-score">
    {#each $dataScore as item (item.id)}
        <p>Score</p>
        <p>{item.total}</p>
    {/each}
    <!--{#if dataScore.length > 0}
        <p>Score</p>
        <p>{latestData.total}</p>
    {:else}
        <p>Score</p>
    {/if}-->
</div>