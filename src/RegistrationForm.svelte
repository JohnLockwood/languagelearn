<style>
label {text-align: right; font-size:.8em;}
input, button, select, textarea {
	font-family: inherit;
	font-size: inherit;
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
}
#registration-form {
    width: 400px;
    margin:0px auto;
    padding-top:1em;
}

.loginlink {
    float:right;
    text-align:right;
    
    font-size:.8em;
}

#registration-button {
position:relative;
bottom:0;    
}
</style>

<script>
let email = "";
let password = "";

function handleEmailChange() {
    console.log(email);
}
</script>

<div id="registration-form">
<h3>Create a New Account</h3> 
    <div><label>Email:</label><br /><input on:change={handleEmailChange} type="text" bind:value={email} /></div>
    <div><label>Password:</label><br /><input type="password" bind:value={password} /></div>
    <div style="height:100px"><button type="button" id="registration-button">Register</button><span class="loginlink">Already Registered?<br /><a href="#">Log in</a></span></div>
</div>