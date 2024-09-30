<script lang="ts">
    import { type Twit } from "@/web3";

    export let twits: ReadonlyArray<Twit>;
</script>

<div>
    {#each twits as twit}
        <p>
            {twit.text}
        </p>
    {/each}
</div>
