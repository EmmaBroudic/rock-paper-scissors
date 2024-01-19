<script lang="ts">
  import { computerPickElement } from '../lib/utils';
  import { battleGame } from '$lib/battleGame';
  import { keepSelectedElements } from '$lib/keepSelectedElements';
  import { keepScore } from '$lib/keepScore';
  import { buttonImage, buttonImageAlt, buttonId } from '$lib/buttonImage';
  import { onMount } from 'svelte';

  let selectByUser: string;
  let chosenByComputer: string;
  export let element: string;
  let totalScore: number = 0;
  let scoreTotal = keepScore;
  const currentData = $scoreTotal;

  const selectedElements = () => {
      selectByUser = element;
      console.log("user : ", selectByUser);
      chosenByComputer = computerPickElement();
      console.log("computer : ", chosenByComputer);

      let battleResult = battleGame(selectByUser, chosenByComputer);

      let data = { id: 1, selectByUser: selectByUser, chosenByComputer: chosenByComputer, result: battleResult};
      keepSelectedElements.update((prevData) => [...prevData, data]);

      if (currentData.length > 0) {
        const latestData = currentData[currentData.length - 1];
        let totalBattles = latestData.total += battleResult;
        let scoreToAdd = { id: 1, total: totalBattles };
        keepScore.update((prevScore) => [...prevScore, scoreToAdd]);
        console.log(totalBattles);
    }
  }
  /*onMount(() => {
        totalScore = $keepScore.reduce((acc: any, score: any) => acc + score.total, 0);
        console.log("score total :", totalScore);
  });*/
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
    width: 170px;
    height: 170px;
    padding: 30px;
    z-index: 0;
  }

  #button-blue {
    position: relative;
    border: solid #4BB9D0 20px;
    border-radius: 50%;
    background-color: beige;
    box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
    width: 170px;
    height: 170px;
    padding: 30px;
    z-index: 0;
  }

  #button-yellow {
    position: relative;
    border: solid #E57067 20px;
    border-radius: 50%;
    background-color: beige;
    box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
    width: 170px;
    height: 170px;
    padding: 30px;
    z-index: 0;
  }

  p {
    display: none;
  }

  img {
    position: absolute;
    top: 42px;
    left: 42px;
    text-align: center;
    z-index: 1;
  }
</style>


<button id={buttonId(element)} on:click={() => selectedElements()}>
    <p>{element}</p>
    <img src={buttonImage(element)} alt={buttonImageAlt(element)}>
</button>
