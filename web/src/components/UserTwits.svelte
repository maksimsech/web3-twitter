<script lang="ts" context="module">
    const formatter = new Intl.DateTimeFormat(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
</script>

<script lang="ts">
    import { type Twit } from '@/web3';

    export let twits: ReadonlyArray<Twit>;
</script>

<div class="flex flex-col gap-2">
    {#each twits as twit}
        <div>
            <div>
                <span class="text-red-700">></span>
                {twit.text}
            </div>
            <div>
                <span class=" text-accent-foreground">
                    on {formatter.format(new Date(twit.createdOn * 1000))}
                </span>
            </div>
        </div>
    {/each}
</div>
