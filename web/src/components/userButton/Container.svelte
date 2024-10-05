<script lang="ts">
    import { Button, buttonVariants } from "@/components/ui/button";
    import { account } from "@/web3";
    import Connect from "./Connect.svelte";
    import { link } from "svelte-routing";
</script>

{#if $account.isConnecting || $account.isReconnecting}
    <Button disabled>{$account.address}</Button>
{:else if $account.address}
    <a
        href={`/user/${$account.address}`}
        class={buttonVariants({ variant: "default" })}
        use:link
    >
        {$account.address}
    </a>
{:else}
    <Connect />
{/if}
