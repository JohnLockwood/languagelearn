<style>
    #registration-form {
        width: 300px;
        margin: 0px auto;
        padding-top: 1em;
    }

    .loginlink {
        float: right;
        text-align: right;

        font-size: .8em;
    }

    .button-section {
        margin-top:.4em;
    }

</style>

<script>
    import Amplify, { Auth } from 'aws-amplify';
    import awsconfig from './aws-exports';
    Amplify.configure(aws-config);
    
    let username = "";
    let password = "";
    let user = null;

    async function handleSignup() {
    try {
        user = await Auth.signUp({
            username,
            password
        });
        console.log(`User object: ${ user }`);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

</script>

<div id="registration-form">
    <div><h1>Create a New Account</h1></div>
    <label class="label is-small">Email:</label><input class="input is-small" type="text" bind:value={username} />
    <label class="label is-small">Password:</label><input class="input is-small" type="password" bind:value={password} />
    <div class="button-section"><button type="button" on:click={handleSignup} class="button is-primary">Register</button><span
            class="loginlink">Already Registered?<br /><a href="javascript:void(0)">Log in</a></span></div>
    </div>