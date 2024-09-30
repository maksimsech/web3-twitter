<script lang="ts">
    import { Button } from "@/components/ui/button";
    import { account } from "@/web3";
    import Connect from "./Connect.svelte";

    $: console.log($account);
</script>

{#if $account.isConnecting || $account.isReconnecting}
    <Button disabled>{$account.address}</Button>
{:else if $account.address}
    <Button on:click={() => console.log("hi")}>
        {$account.address}
    </Button>
{:else}
    <Connect />
{/if}
