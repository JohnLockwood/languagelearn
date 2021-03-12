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

<header>
    <div>
        <nav>
            <ul>
                <li class:active={path === "/"}><a href="/" on:click={() => path = "/"}>LanguageLearn.pro</a></li>
                <li class:active={path === "/home"}><a on:click={() => path = "/home"} href="/home">Home</a></li>
                <li class:active={path === "/about"}><a on:click={() => path = "/about"} href="/about">About</a></li>            
                <li class:active={path === "/pricing"}><a on:click={() => path = "/pricing"} href="/pricing">Pricing</a></li>            
            </ul>
        </nav>
    </div>
    {#if userLocal != null}    
    <div class="login-display">{userLocal.username}&nbsp;&nbsp;<a href="/" on:click|preventDefault={onLogout}>Log Out</a></div>
    {/if}
   
</header>