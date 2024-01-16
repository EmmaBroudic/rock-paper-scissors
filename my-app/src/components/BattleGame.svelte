<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';

    let myData = keepSelectedElements;
</script>

<div>
    <h1>Battle Game</h1>
    {#each $myData as item (item.id)}
        <button>{item.selectByUser}</button>
        <button>{item.chosenByComputer}</button>
        <p>{item.result}</p>
        <p>Play again</p>
    {/each}
</div>