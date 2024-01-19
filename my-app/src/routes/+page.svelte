<script lang="ts">
    import './page.css';
    import Home from "./home.svelte";
    import Header from '../components/Header.svelte';
    import Battle from "./battle.svelte";
    import { keepSelectedElements } from '$lib/keepSelectedElements';

    let myData = keepSelectedElements;
    let selectByUser = "";

    if ($myData.length > 0) {
        const latestData = $myData[0];
        selectByUser = latestData.selectByUser;
        console.log("home", selectByUser);
    }
</script>

<style>
    #bloc-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>

<div id="bloc-main">
    {#if $myData.length > 0}
        <Header />
        <Battle />
    {:else}
        <Header />
        <Home />
    {/if}
</div>