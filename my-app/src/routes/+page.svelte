<script>
  import Counter from '../components/Counter.svelte'
  import ButtonsBloc from '../components/ButtonsBloc.svelte'
  import './page.css'
</script>

<body>

    <h1>Rock, paper, scissors</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <div id="buttons">
        <div class="button">
            <Counter />
        </div>
        <ButtonsBloc />
    </div>

</body>
