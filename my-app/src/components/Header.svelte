<script>
    import Score from './Score.svelte';
</script>

<style>
    @font-face {
        font-family: 'Barlow';
        src: url('src/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');
    }

    #title {
        border: 2px solid white;
        font-family: 'Barlow';
        font-size: 14pt;
        border-radius: 20px;
        width: 60%;
        height: 180px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        margin: 10px;
    }

    h1 {
        width: 20%;
    }
</style>

<div id="title">
    <h1>ROCK PAPER SCISSORS</h1>
    <Score />
</div>

