<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Index from "./Index.svelte";
    import User from "./User.svelte";
</script>

<Router>
    <Route path="/user/:id" let:params>
        <User account={params.id} />
    </Route>
    <Route path="/">
        <Index />
    </Route>
</Router>
