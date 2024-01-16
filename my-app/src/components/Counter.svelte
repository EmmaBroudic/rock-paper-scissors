<script lang="ts">
  let count = 0

  const increment = () => {
    count += 1;
  };
</script>

<style>
  .even {
    border: 2px solid green;
  }

  .odd {
    border: 2px solid red;
  }
</style>

<button on:click={() => increment()} class:even={count % 2 === 0} class:odd={count % 2 !== 0}>
  {count}
</button>