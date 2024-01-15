<script>
  let count = 0;
  let select = "";
  export let element;

  const elementToAdd = () => {
    select = element;
    console.log(select);
  }
</script>

<button on:click={() => elementToAdd()}>
  {element}
</button>