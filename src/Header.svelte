<style>
    .header-grid {
        display:grid;
        grid-template-columns: 80% 10% 10%;
        padding-top:12px;
    }

    .logged-in-user {
        font-weight:bold;
        padding-top:7px;
    }
    .logged-in-button {
        font-weight:bold;
        padding-top:0px;
    }
    
    

</style>

<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let user = null; /* Prop from Body */

    function onLogout() {        
        dispatch("logout", {});
    }
</script>
<div class="app-header header-grid">
    <div>
    <h1 class="title is-3">LanguageLearn.pro</h1>
    </div>
    {#if user != null}
    <div class="logged-in-user">Welcome {user.username}.</div>
    <div class="logged-in-button"><button type="button" class="button is-link" on:click={onLogout}>Log Out</button></div>
    {/if}
</div>
