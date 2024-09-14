<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { initialize, listenForAccountChanges } from "./web3";
    import Router from "./pages/Router.svelte";
    import AddressSelector from "./components/AddressSelector.svelte";

    let unsubscribe = () => {};

    onMount(async () => {
        await initialize();
        unsubscribe = listenForAccountChanges();
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<header class="flex justify-end">
    <AddressSelector />
</header>
<main>
    <Router />
</main>
