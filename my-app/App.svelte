<script>
  import Button from './routes/Button.svelte'
</script>

<main>
  <h1>Rock, paper, scissors</h1>

  <div class="card">
    <Counter />
  </div>

  <div id="button-bloc">
    <div class="button">
      <button>Rock</button>
    </div>

    <div class="button">
      <button>Paper</button>
    </div>

    <div class="button">
      <button>Scissors</button>
    </div>
  </div>

</main>

<style>
  #button-bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>