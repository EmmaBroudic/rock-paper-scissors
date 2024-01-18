<script lang="ts">
    import PlayAgain from './PlayAgain.svelte'
    import SelectByUser from './SelectByUser.svelte';
    import ChosenByComputer from './ChosenByComputer.svelte';

    let showUser = true;
    let computerShadow =true;
    let showPlay = false;
    let showComputer = false;

    setTimeout(() => {
        showPlay = true;
    }, 3000);

    setTimeout(() => {
        showComputer = true;
        computerShadow = false;
    }, 1500);

</script>

<style>
    #battle-game {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #user, #play, #computer {
        margin: 30px;
        /*opacity: 0;*/
        transition: opacity 0.5s ease; /* Add a transition for a smooth fade-in effect */
    }

    #shadow {
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 55px;
        border-radius: 50%;
        background-color: #063970;
        width: 80px;
        height: 80px;
        padding: 30px;
    }

    .show {
        opacity: 1;
    }
</style>

<div id="battle-game">
    {#if showUser}
        <div id="user" class="show"><SelectByUser /></div>
    {/if}
    {#if computerShadow}
        <div id="shadow" class="show"></div>
    {/if}
    {#if showPlay}
        <div id="play" class="show"><PlayAgain /></div>
    {/if}
    {#if showComputer}
        <div id="computer" class="show"><ChosenByComputer /></div>
    {/if}
</div>