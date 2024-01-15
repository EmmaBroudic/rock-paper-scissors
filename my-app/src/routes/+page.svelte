<script>
  import Button from './Button.svelte'
</script>

<body>

    <h1>Rock, paper, scissors</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <div id="button-bloc">

        <div class="button">
            <Button />
        </div>

        <div class="button">
            <button>Rock</button>
        </div>

        <div class="button">
            <button>Paper</button>
        </div>

        <div class="button">
            <button>Scissors</button>
        </div>
    </div>

</body>
