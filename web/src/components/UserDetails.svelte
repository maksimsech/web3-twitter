<script lang="ts">
    import TwitForm from "./TwitForm.svelte";
    import UserTwits from "./UserTwits.svelte";

    export let account: string;
</script>

<div class="flex flex-col gap-2">
    {account}
    <UserTwits {account} />
    <TwitForm />
</div>
