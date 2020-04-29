<style>

    .button-section {
        margin-top:.4em;
    }

</style>

<script>
    import Amplify, { Auth } from 'aws-amplify';
    import awsconfig from './aws-exports';
    Amplify.configure(awsconfig);
    
    let username = "";
    let password = "";
    let user = null;

    async function handleSignup() {
    try {
        user = await Auth.signUp({
            username,
            password
        });
        console.log(`User: ${ user }`);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

</script>

<div id="registration-form">
    <div><h1>Log In</h1></div>
    <label class="label is-small">Email:</label><input class="input is-small" type="text" bind:value={username} />
    <label class="label is-small">Password:</label><input class="input is-small" type="password" bind:value={password} />
    <div class="button-section"><button type="button" on:click={handleSignup} class="button is-primary">Log In</button></div>
    </div>