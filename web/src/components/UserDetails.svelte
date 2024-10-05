<script lang="ts">
    import type { Address } from 'viem';
    import TwitForm from './TwitForm.svelte';
    import UserTwits from './UserTwits.svelte';
    import { getUserTwits, type Twit } from '@/web3';

    export let account: string;
    export let showForm = false;

    let twitsPromise: Promise<ReadonlyArray<Twit>> = null!;

    $: twitsPromise = getUserTwits(account as Address);

    function refreshTwits() {
        twitsPromise = getUserTwits(account as Address);
    }
</script>

<div class="flex flex-col gap-4">
    <h2 class="text-bold">
        Page of user {account}
    </h2>
    {#await twitsPromise}
        <p class=" text-center">Loading...</p>
    {:then twits}
        {#if twits.length > 0}
            <UserTwits {twits} />
        {/if}
    {/await}
    {#if showForm}
        <TwitForm onTwitAdded={refreshTwits} />
    {/if}
</div>
