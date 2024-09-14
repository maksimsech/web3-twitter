<script lang="ts">
    import type { Writable } from "svelte/store";
    import { initialize, account } from "./web3";
    import UserDetails from "@/components/UserDetails.svelte";

    let init = initialize();

    let currentAccount = account as Writable<string>;
</script>

<main>
    {#await init}
        <p class=" text-center">Loading...</p>
    {:then}
        <UserDetails account={$currentAccount} />
    {/await}
</main>
