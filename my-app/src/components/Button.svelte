<script lang="ts">
  import { random } from '../lib/utils.ts';

  let selectByUser = "test";
  export let element;

  let selection = ["Rock", "Paper", "Scissors"];
  let randomNumber;
  let chosenByComputer = "";

  const elementsSelected = () => {
    selectByUser = element;
    console.log("user : ", selectByUser);
    randomNumber = random(0, 2)
    chosenByComputer = selection[randomNumber];
    console.log("computer : ", chosenByComputer);
  }
</script>

<button on:click={() => elementsSelected()}>
  {element}
</button>