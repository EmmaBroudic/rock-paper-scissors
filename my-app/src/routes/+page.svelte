<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from './home.svelte';
    import Battle from './battle.svelte';
    //import { goto } from '$app/navigation';
  
    export let url = "";
</script>

<style>
    nav {
        display: none;
    }
</style>
  
<Router {url}>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/battle">Battle</Link>
    </nav>

    <slot></slot>

    <div>
        <Route path="/"><Home /></Route>
        <Route path="/battle"><Battle /></Route>
    </div>
</Router>
