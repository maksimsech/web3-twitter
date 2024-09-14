<script lang="ts">
    import { Input } from "./ui/input";
    import { Button } from "./ui/button";
    import { postTwit } from "../web3";

    export let onTwitAdded: () => void;

    let text = "";
    let isLoading = false;

    async function formHandler() {
        isLoading = true;
        try {
            await postTwit(text);
        } finally {
            text = "";
            isLoading = false;
            onTwitAdded();
        }
    }
</script>

<div class="flex gap-2">
    {#if isLoading}
        <p class=" text-destructive-foreground">Saving twit...</p>
    {/if}
    <Input bind:value={text} disabled={isLoading}></Input>
    <Button on:click={formHandler} disabled={isLoading}>Save</Button>
</div>
