<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { battleGameResultText } from '$lib/battleGame';

    let myData = keepSelectedElements;

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
   <button id="play-again" on:click={() => clearData()}>PLAY AGAIN</button>
</div>