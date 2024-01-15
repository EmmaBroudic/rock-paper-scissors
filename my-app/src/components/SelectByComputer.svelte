<script>
    import { random } from '../lib/utils.ts';

    let selectByComputer = ["rock", "paper", "scissors"];
    let randomNumber;

    const test = "test";
    let chosen = "";

    const choose = () => {
        randomNumber = random(0, 2);
        chosen = selectByComputer[randomNumber];
        console.log(chosen);
    }
</script>

<button on:click={() => choose()}>
    {test}
</button>