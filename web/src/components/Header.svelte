<script lang="ts">
    import LightSwitch from './ui/LightSwitch.svelte';
    import Separator from './ui/separator/separator.svelte';
    import { UserButton } from './userButton';
</script>

<header class="flex justify-between px-2 py-1 items-center">
    <h1>web3-twitter</h1>
    <div class="flex gap-2">
        <UserButton />
        <LightSwitch />
    </div>
</header>
<Separator class="mb-4 mx-2" />
