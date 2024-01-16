<script lang="ts">
  import { computerPickElement } from '../lib/utils';
  import { battleGame } from '$lib/battleGame';
  import { keepSelectedElements } from '$lib/keepSelectedElements';
    //import { Redirect_1 } from '@sveltejs/kit';

  let selectByUser = "test";
  let chosenByComputer: string;
  export let element: string;

  const selectedElements = () => {
    selectByUser = element;
    console.log("user : ", selectByUser);
    
    chosenByComputer = computerPickElement();
    console.log("computer : ", chosenByComputer);
    //;
    
    const buttonsSelectDom = document.getElementById('buttons-select');
    buttonsSelectDom.style.display = 'none';
    const buttonsGameDom = document.getElementById('buttons-game');
    buttonsGameDom.style.display = 'flex';

    let data = { id: 1, selectByUser: selectByUser, chosenByComputer: chosenByComputer, result: battleGame(selectByUser, chosenByComputer) };

    // Utilisez la méthode `update` pour mettre à jour le store
    keepSelectedElements.update((prevData) => [...prevData, data])
  }
</script>

<button on:click={() => selectedElements()}>
  {element}
</button>