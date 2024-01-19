<script lang="ts">
  import { computerPickElement } from '../lib/utils';
  import { battleGame } from '$lib/battleGame';
  import { keepSelectedElements } from '$lib/keepSelectedElements';
  import { keepScore } from '$lib/keepScore';
  import { buttonImage, buttonImageAlt, buttonId } from '$lib/buttonImage';

  let selectByUser: string;
  let chosenByComputer: string;
  export let element: string;
  let totalScore = 0;

  const selectedElements = () => {
      selectByUser = element;
      console.log("user : ", selectByUser);
      chosenByComputer = computerPickElement();
      console.log("computer : ", chosenByComputer);

      let data = { id: 1, selectByUser: selectByUser, chosenByComputer: chosenByComputer, result: battleGame(selectByUser, chosenByComputer)};
      keepSelectedElements.update((prevData) => [...prevData, data]);

      let battleResult: number;

      battleResult = battleGame(selectByUser, chosenByComputer);
      const newId = $keepScore.length + 1;
      let scoreToAdd = { id: newId, total: battleResult };
      keepScore.update((prevScore) => [...prevScore, scoreToAdd]);
      totalScore += battleResult;
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
    border: solid #AB6676 20px;
    border-radius: 50%;
    background-color: beige;
    box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
    width: 150px;
    height: 150px;
    padding: 30px;
    z-index: 0;
  }

  #button-blue {
    position: relative;
    border: solid #4BB9D0 20px;
    border-radius: 50%;
    background-color: beige;
    box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
    width: 150px;
    height: 150px;
    padding: 30px;
    z-index: 0;
  }

  #button-yellow {
    position: relative;
    border: solid #E57067 20px;
    border-radius: 50%;
    background-color: beige;
    box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
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
    top: 30px;
    left: 28px;
    text-align: center;
    z-index: 1;
  }
</style>


<button id={buttonId(element)} on:click={() => selectedElements()}>
    <p>{element}</p>
    <img src={buttonImage(element)} alt={buttonImageAlt(element)}>
</button>
