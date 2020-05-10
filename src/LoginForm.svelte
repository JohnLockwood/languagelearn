<style>
 
</style>

<script>
    import Amplify, { Auth } from 'aws-amplify';
    import {user} from './AppStore';
    import { createEventDispatcher } from 'svelte';
    import awsconfig from './aws-exports';
    
    Amplify.configure(awsconfig);
    const dispatch = createEventDispatcher();
    
    let username = "";
    let password = "";
    let userLocal = null;

    async function logonUser() {
    try {
        userLocal = await Auth.signIn({
            username,
            password
        });
        user.update(u => userLocal);
        console.log(`Logged in! : ${JSON.stringify(userLocal)}`);
    
    } catch (error) {
        console.log('error signing up:', error);
    }
}

</script>

<form>
    <h1>Sign In</h1>
    <label class="label is-small">Username (case sensitive):</label><input class="input is-small" type="text" bind:value={username} />
    <label class="label is-small">Password:</label><input class="input is-small" type="password" bind:value={password} />
    <button type="button" on:click={logonUser} class="button is-primary">Log In</button>
    &nbsp;&nbsp;No Account?&nbsp;&nbsp;
    <a href="/" on:click|preventDefault={() => dispatch("registertab", {"option": "register"}) }>Create Account</a>
</form>