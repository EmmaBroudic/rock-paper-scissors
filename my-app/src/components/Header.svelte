<script>
    import Score from './Score.svelte';
</script>

<style>
    #title {
        border: 2px solid white;
        border-radius: 20px;
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
        margin: 30px;
    }

    h1 {
        width: 20%;
    }
</style>

<div id="title">
    <h1>ROCK PAPER SCISSORS</h1>
    <Score />
</div>

