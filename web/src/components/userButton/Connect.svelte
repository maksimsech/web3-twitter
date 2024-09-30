<script lang="ts">
    import { connectors } from "@/web3";
    import { buttonVariants } from "../ui/button";
    import * as Dialog from "../ui/dialog";
    import Button from "../ui/button/button.svelte";
</script>

<Dialog.Root>
    <Dialog.Trigger class={buttonVariants({ variant: "outline" })}>
        Connect
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
            <Dialog.Title>Select Wallet to connect</Dialog.Title>
            <Dialog.Description>Choose one option.</Dialog.Description>
        </Dialog.Header>
        {#each $connectors as connector}
            <Button on:click={() => connector.connect()}>
                {connector.name}
            </Button>
        {/each}
    </Dialog.Content>
</Dialog.Root>
