<style>
    .half-form {
        width: 80%;
        margin: 0px auto;
        padding-top: 1em;
    }

    .button-section {
        margin-top:.4em;
    }

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


    async function handleSignup() {
    try {
        userLocal = await Auth.signIn({
            username,
            password
        });
        user.update(u => userLocal);
        dispatch('logon', {'user': user});
    } catch (error) {
        console.log('error signing up:', error);
    }
}

</script>

<div class="half-form">
    <div><h1>Log In</h1></div>
    <label class="label is-small">Username (case sensitive):</label><input class="input is-small" type="text" bind:value={username} />
    <label class="label is-small">Password:</label><input class="input is-small" type="password" bind:value={password} />
    <div class="button-section"><button type="button" on:click={handleSignup} class="button is-primary">Log In</button></div>
    </div>