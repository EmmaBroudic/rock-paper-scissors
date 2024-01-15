<script>
  import Counter from '../components/Counter.svelte'
  import Button from '../components/Button.svelte'
  import './page.css'
</script>

<body>

    <h1>Rock, paper, scissors</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <div id="button-bloc">

        <div class="button">
            <Counter />
        </div>

        <div class="button">
            <Button element = "Rock"/>
        </div>

        <div class="button">
            <Button element = "Paper"/>
        </div>

        <div class="button">
            <Button element = "Scissors"/>
        </div>
    </div>

</body>
