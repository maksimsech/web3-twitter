<script lang="ts">
    import UserDetails from "@/components/UserDetails.svelte";
    import { account as currentAccount } from "../web3";

    export let account: string;

    $: showForm = account === $currentAccount;
</script>

<UserDetails {account} {showForm} />
