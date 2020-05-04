<style>


</style>

<script>
    import Amplify, { Auth } from 'aws-amplify';
    import awsconfig from './aws-exports';
    Amplify.configure(awsconfig);
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
    
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

<form>    
    <h3>Register</h3>
    <label>Username (case sensitive):</label><input  type="text" bind:value={username} />
    <label>Email:</label><input type="text" bind:value={email} />
    <label >Password:</label><input type="password" bind:value={password}/>    
    <br />
    <button type="button" on:click={handleSignup} class="button is-primary">Register</button>&nbsp;&nbsp;Have an Account?&nbsp;&nbsp;
    <a href="/" on:click|preventDefault={() => dispatch("registertab", {"option": "sign-in"}) }>Sign in</a>
</form>