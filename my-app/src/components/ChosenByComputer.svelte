<script lang="ts">
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { buttonImage, buttonImageAlt, buttonId } from '$lib/buttonImage';

    let myData = keepSelectedElements;
</script>

<style>
    @font-face {
      font-family: 'Barlow';
      src: url('src/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');
    }

    p {
      font-family: 'Barlow';
      font-size: 16pt;
    }

    .picked-element {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
    }

    #button-red {
      position: relative;
      border: solid #AB6676 20px;
      border-radius: 50%;
      background-color: beige;
      box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
      width: 75px;
      height: 75px;
      padding: 30px;
      z-index: 0;
    }

    #button-blue {
      position: relative;
      border: solid #4BB9D0 20px;
      border-radius: 50%;
      background-color: beige;
      box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
      width: 75px;
      height: 75px;
      padding: 30px;
      z-index: 0;
    }

    #button-yellow {
      position: relative;
      border: solid #E57067 20px;
      border-radius: 50%;
      background-color: beige;
      box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
      width: 75px;
      height: 75px;
      padding: 30px;
      z-index: 0;
    }

    img {
    position: absolute;
    top: 40px;
    left: 40px;
    text-align: center;
    z-index: 1;
  }
</style>


{#each $myData as item (item.id)}
    <div class="picked-element">
        <p>THE HOUSE PICKED</p>
        <div id={buttonId(item.chosenByComputer)}>
            <img src={buttonImage(item.chosenByComputer)} alt={buttonImageAlt(item.chosenByComputer)}>
        </div>
    </div>
{/each}