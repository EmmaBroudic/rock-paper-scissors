<script lang="ts">
  import ButtonsSelectionBloc from '../components/ButtonsSelectionBloc.svelte'
  import BattleGame from '../components/BattleGame.svelte'
  import './page.css'
    import BookDetail from '../components/BookDetail.svelte';
</script>

<style>
    #buttons-game {
        display: none;
    }
</style>

<body>

    <h1>Rock, paper, scissors</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <div id="buttons-select">
        <ButtonsSelectionBloc />
    </div>

    <BookDetail />
    <div id="buttons-game">
        <BattleGame />
    </div>

</body>
