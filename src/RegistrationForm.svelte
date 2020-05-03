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
    import awsconfig from './aws-exports';
    Amplify.configure(awsconfig);
    
    let username = "";
    let email = "";
    let password = "";


    let user = null;

    // username: someUsername, password: somePassword, attributes: { email: someEmail }
    async function handleSignup() {
    try {
        user = await Auth.signUp({
            username,
            password,
            attributes: {email: email}
        });
        console.log(`User: ${ user }`);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

</script>

<div class="half-form">    
    <div><h1>Create a New Account</h1></div>
    <label class="label is-small">Username (case sensitive):</label><input class="input is-small" type="text" bind:value={username} />
    <label class="label is-small">Email:</label><input class="input is-small" type="text" bind:value={email} />
    <label class="label is-small">Password:</label><input class="input is-small" type="password" bind:value={password} />
    <div class="button-section"><button type="button" on:click={handleSignup} class="button is-primary">Register</button></div>
    </div>