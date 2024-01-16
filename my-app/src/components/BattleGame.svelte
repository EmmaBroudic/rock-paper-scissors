<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';

    // Utilisez le store dans votre composant
    let myData = keepSelectedElements;


</script>

<div>
    <h1>Battle Game</h1>
    {#each $myData as item (item.id)}
        <button>{item.selectByUser}</button>
        <button>{item.chosenByComputer}</button>
    {/each}
</div>