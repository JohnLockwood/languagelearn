<style>
    .header-grid {
        display:grid;
        grid-template-columns: 50% 30% 10% 10%;
        padding-top:12px;
    }

    .logged-in-user {
        font-weight:bold;
        padding-top:7px;
        padding-right:1em;
        text-align:right;
    }
    .logged-in-button {
        font-weight:bold;
        padding-top:0px;
    }
    
</style>

<script>
    import { createEventDispatcher } from 'svelte';
    import { user } from './AppStore';
    const dispatch = createEventDispatcher();

    let userLocal = null;

    user.subscribe(value => userLocal = value);

    function onLogout() {        
        user.update(u => null);
    }
</script>
<div class="app-header header-grid">
    <div>
    <h1 class="title is-3">LanguageLearn.pro</h1>
    </div>
    {#if userLocal != null}
    <div class="logged-in-user">{userLocal.username}</div>
    <div class="logged-in-button"><button type="button" class="button is-link" on:click={onLogout}>Log Out</button></div>
    {/if}
</div>
