<script lang="ts">
    import { Input } from './ui/input';
    import { Button } from './ui/button';
    import { postTwit } from '@/web3';
    import { Label } from './ui/label';

    export let onTwitAdded: () => void;

    let text = '';
    let isLoading = false;

    async function formHandler() {
        isLoading = true;
        try {
            await postTwit(text);
        } finally {
            text = '';
            isLoading = false;
            onTwitAdded();
        }
    }
</script>

<div class="grid gap-3 grid-cols-[1fr_min-content]">
    <Label class="col-span-2" for="twitInput">Add your twit</Label>
    <Input class="" id="twitInput" bind:value={text} disabled={isLoading}></Input>
    <Button on:click={formHandler} disabled={isLoading}>Save</Button>
</div>
