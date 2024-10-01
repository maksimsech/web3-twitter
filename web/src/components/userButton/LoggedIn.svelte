<script lang="ts">
    import { Button } from "@/components/ui/button";
    import { account, connections } from "@/web3";
    import * as Popover from "../ui/popover";
</script>

<Popover.Root>
    <Popover.Trigger asChild let:builder>
        <Button builders={[builder]}>
            {$account.address}
        </Button>
    </Popover.Trigger>
    <Popover.Content class="w-80">
        <div class="flex gap-4"></div>
    </Popover.Content>
</Popover.Root>
