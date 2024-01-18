<script lang="ts">
    import PlayAgain from './PlayAgain.svelte'
    import SelectByUser from './SelectByUser.svelte';
    import ChosenByComputer from './ChosenByComputer.svelte';

    // gérer les animations dans ce script
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
</style>

<div id="battle-game">
    <div id="buttons-battle">
        <SelectByUser />
        <PlayAgain />
        <ChosenByComputer />
    </div>
</div>