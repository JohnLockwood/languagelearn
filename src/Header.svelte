<style>
    .header-grid {
        display:grid;
        grid-template-columns: 60% 30% 10%;        
    }

    .logged-in-user {
        font-weight:bold;
        padding-right:1em;
        text-align:right;
    }
    .logged-in-button {
        font-weight:bold;        
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

     let path = "/";
   

    
</script>
<header class="header-grid">
    <nav>
        <ul>
            <li class:active={path === "/"}><a href="/" on:click={() => path = "/"}>LanguageLearn.pro</a></li>
            <li class:active={path === "/home"}><a on:click={() => path = "/home"} href="/home">Home</a></li>
            <li class:active={path === "/about"}><a on:click={() => path = "/about"} href="/about">About</a></li>            
            <li class:active={path === "/pricing"}><a on:click={() => path = "/pricing"} href="/pricing">Pricing</a></li>            
        </ul>
    </nav>
    {#if userLocal != null}
    <div class="logged-in-user">{userLocal.username}</div>
    <div class="logged-in-button"><button type="button" class="button is-link" on:click={onLogout}>Log Out</button></div>
    {/if}
</header>
