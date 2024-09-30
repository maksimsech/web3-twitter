<script lang="ts">
    import Router from "./pages/Router.svelte";
    import { UserButton } from "@/components/userButton";
    import { onMount } from "svelte";
    import { reconnect } from "./web3";

    onMount(() => {
        reconnect();
    });
</script>

<header class="flex justify-end">
    <UserButton />
</header>
<main>
    <Router />
</main>
