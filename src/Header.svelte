<style>
    .header-grid {
        display:grid;
        grid-template-columns: 60% 30% 10%;
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
    import Amplify, { Auth } from 'aws-amplify';
    import awsconfig from './aws-exports';
    Amplify.configure(awsconfig);
    import { user } from './AppStore';
    
    let userLocal = null;

    user.subscribe(value => userLocal = value);

    function onLogout() {  
        try {
            Auth.signOut();
            user.update(u => null);
            console.log("Logout successful");
        }
        catch(error) {
            console.log(`Error logging out, ${error}`);
        }
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
