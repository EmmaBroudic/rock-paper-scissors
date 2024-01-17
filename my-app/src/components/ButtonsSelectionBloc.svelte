<script lang="ts">
    import ButtonSelection from './ButtonSelection.svelte';
</script>

<style>
    #paper-scissors {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      margin-bottom: 30px;
    }
</style>


<div id="paper-scissors">
  <ButtonSelection element = "Paper" />
  <ButtonSelection element = "Scissors"/>
</div>
<ButtonSelection element = "Rock" />
