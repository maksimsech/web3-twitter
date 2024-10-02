<script lang="ts">
    import { type Twit } from '@/web3';

    export let twits: ReadonlyArray<Twit>;
</script>

<div class="flex flex-col gap-2">
    {#each twits as twit}
        <div>
            <p>
                > {twit.text}
                <span class=" text-foreground">
                    on {new Date(twit.createdOn)}
                </span>
            </p>
        </div>
    {/each}
</div>
