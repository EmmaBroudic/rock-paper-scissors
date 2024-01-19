<script lang="ts">
    import ButtonSelection from './ButtonSelection.svelte';
</script>

<style>
    #bloc-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #paper-scissors {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 460px;
      margin-bottom: 30px;
    }
</style>

<div id="bloc-buttons">
  <div id="paper-scissors">
    <ButtonSelection element = "Paper" />
    <ButtonSelection element = "Scissors"/>
  </div>
    <ButtonSelection element = "Rock" />
</div>
