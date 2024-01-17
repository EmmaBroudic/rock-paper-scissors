<script lang="ts">
  import { computerPickElement } from '../lib/utils';
  import { battleGame } from '$lib/battleGame';
  import { keepSelectedElements } from '$lib/keepSelectedElements';
  import { buttonImage, buttonImageAlt, buttonId } from '$lib/buttonImage';
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

<style>
  /*    Scissors Gradient: #D95347 to #E57067
    Paper Gradient: #4BB9D0 to #4BB9D4
    Rock Gradient: #AB6676 to #AF788E
    Lizard Gradient: #4E9FAB to #5395A2
    Cyan: #49A687 to #4A948F*/
  #button-red {
    position: relative;
    border: solid #AB6676 15px;
    border-radius: 50%;
    background-color: beige;
    width: 150px;
    height: 150px;
    padding: 30px;
    z-index: 0;
  }

  #button-blue {
    position: relative;
    border: solid #4BB9D0 15px;
    border-radius: 50%;
    background-color: beige;
    width: 150px;
    height: 150px;
    padding: 30px;
    z-index: 0;
  }

  #button-yellow {
    position: relative;
    border: solid #E57067 15px;
    border-radius: 50%;
    background-color: beige;
    width: 150px;
    height: 150px;
    padding: 30px;
    z-index: 0;
  }

  p {
    display: none;
  }

  img {
    position: absolute;
    top: 35px;
    left: 35px;
    text-align: center;
    z-index: 1;
  }
</style>


<Link to="battle">
    <button id={buttonId(element)} on:click={() => selectedElements()}>
        <p>{element}</p>
        <img src={buttonImage(element)} alt={buttonImageAlt(element)}>
    </button>
</Link>