<script lang="ts">
  import { computerPickElement } from '../lib/utils';
  import { battleGame } from '$lib/battleGame';
  import { keepSelectedElements } from '$lib/keepSelectedElements';
  import { keepScore } from '$lib/keepScore';
  import { Link } from "svelte-routing";

  let selectByUser: string;
  let chosenByComputer: string;
  export let element: string;

  const selectedElements = () => {
    selectByUser = element;
    console.log("user : ", selectByUser);
    chosenByComputer = computerPickElement();
    console.log("computer : ", chosenByComputer);
    
    let data = { id: 1, selectByUser: selectByUser, chosenByComputer: chosenByComputer, result: battleGame(selectByUser, chosenByComputer)};
    keepSelectedElements.update((prevData) => [...prevData, data]);
  }
</script>

<Link to="battle">
  <button on:click={() => selectedElements()}>{element}</button>
</Link>
