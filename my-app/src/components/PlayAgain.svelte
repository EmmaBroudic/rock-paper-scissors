<script>
    import { keepSelectedElements } from '../lib/keepSelectedElements';
    import { Link } from "svelte-routing";

    function clearData() {
        keepSelectedElements.set([]);;
    }
</script>

<Link to="/"><button on:click={() => clearData()}>Play again</button></Link>