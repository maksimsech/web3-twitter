<script lang="ts">
    import { onMount } from 'svelte';
    import { ModeWatcher } from 'mode-watcher';
    import Header from '@/components/Header.svelte';
    import Router from './pages/Router.svelte';
    import { reconnect } from './web3';

    onMount(() => {
        reconnect();
    });
</script>

<ModeWatcher />
<Header />
<main class="px-6">
    <Router />
</main>
