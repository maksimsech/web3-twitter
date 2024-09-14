<script lang="ts">
    import * as Select from "@/components/ui/select";
    import { Button } from "@/components/ui/button";
    import { account, accounts, initialized, refreshAccounts } from "../web3";

    $: selectedAccount = {
        label: $account || undefined,
        value: $account,
    };
</script>

{#if $initialized}
    <Button on:click={refreshAccounts}>Reset</Button>
    <Select.Root
        portal={null}
        selected={selectedAccount}
        onSelectedChange={(v) => {
            v && account.set(v.value);
        }}
    >
        <Select.Trigger class="w-[400px]">
            <Select.Value placeholder="Select an account"></Select.Value>
        </Select.Trigger>
        <Select.Content>
            <Select.Group>
                <Select.Label>Accounts</Select.Label>
                {#each $accounts as a}
                    <Select.Item value={a} label={a}>{a}</Select.Item>
                {/each}
            </Select.Group>
        </Select.Content>
        <Select.Input name="favoriteFruit" />
    </Select.Root>
{/if}
