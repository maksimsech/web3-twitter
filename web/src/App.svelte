<script lang="ts">
    import { ModeWatcher } from "mode-watcher";
    import Router from "./pages/Router.svelte";
    import { UserButton } from "@/components/userButton";
    import { onMount } from "svelte";
    import { reconnect } from "./web3";
    import LightSwitch from "@/components/ui/LightSwitch.svelte";

    onMount(() => {
        reconnect();
    });
</script>

<ModeWatcher />
<header class="flex justify-end">
    <div class="flex gap-2">
        <UserButton />
        <LightSwitch />
    </div>
</header>
<main>
    <Router />
</main>
