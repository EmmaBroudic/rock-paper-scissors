<script lang="ts">
    import ButtonsSelectionBloc from "../components/ButtonsSelectionBloc.svelte";
    import "./page.css";
</script>

<style>
    #button-selection {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 65%;
        top: 215px;
        z-index: 1;
        margin: 60px;
    }

    img {
        position: relative;
        z-index: 0;
        margin: 30px;
    }
</style>

<div id="button-selection">
    <ButtonsSelectionBloc />
</div>
<img src="src/images/bg-triangle.svg" alt="triangle" />


