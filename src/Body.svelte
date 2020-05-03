<script>

import HomeGuest from './HomeGuest.svelte'
import About from './About.svelte'
import Header from './Header.svelte'
import router from "page"
import Amplify, { Auth } from 'aws-amplify';
    
import { createEventDispatcher } from 'svelte';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



let page
let params
let user = null;
function handleUserLogon(event) {
    user = event.detail.user;
    console.log(`Logged in! : ${JSON.stringify(event.detail.user)}`);
}

function handleUserLogout() {
    try {
        Auth.signOut();
        user = null;
        console.log("Logout successful");
    }
    catch(error) {
        console.log(`Error logging out, ${error}`);
    }
    
}

router("/", () => {page = HomeGuest; } );
router("/about", () => {page = About; } );
router.start();
</script>

<div class="app">
    <Header user={user} on:logout={handleUserLogout} />
    <div class="navbar">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/about">About</a>
    </div>      
    <svelte:component this={page} on:logon={handleUserLogon} />
    <!-- <svelte:component this={page} ...params /> -->    
</div>
