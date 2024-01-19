<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { battleGameResultText } from '$lib/battleGame';

    let myData = keepSelectedElements;

    function clearData() {
        keepSelectedElements.set([]);;
    }
</script>

<style>
    @font-face {
      font-family: 'Barlow';
      src: url('src/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');
    }

    button {
      font-family: 'Barlow';
      font-size: 16pt;
    }

    p {
      font-family: 'Barlow';
      font-size: 12pt;
    }

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