<script lang="ts">
  import { random } from '../lib/utils';
  import { writable } from 'svelte/store';

  export let element: string;

  export let selectByUser = writable("");
  let selection = ["Rock", "Paper", "Scissors"];
  let randomNumber;
  export let chosenByComputer = writable("");

  const elementsSelected = () => {
    selectByUser.set(element);
    console.log("user : ", $selectByUser);
    randomNumber = random(0, 2);
    chosenByComputer.set(selection[randomNumber]);
    console.log("computer : ", $chosenByComputer);

    const buttonsSelectDom = document.getElementById('buttons-select');
    buttonsSelectDom.style.display = 'none';

    const buttonsGameDom = document.getElementById('buttons-game');
    buttonsGameDom.style.display = 'flex';
  }
</script>

<button on:click={() => elementsSelected()}>
  {element}
</button>

<!--modifier le code pour que la logique de conservation de Element et computerChose se fasse dans un autre fichier ts-->