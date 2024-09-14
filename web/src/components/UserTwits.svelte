<script lang="ts">
    import { getUserTwits } from "../web3";

    export let account: string;

    let twittsPromise = getUserTwits(account);
</script>

<div>
    {#await twittsPromise}
        <p class=" text-center">Loading...</p>
    {:then twitts}
        {#each twitts as twitt}
            <p>
                {twitt.text}
            </p>
        {/each}
    {/await}
</div>
