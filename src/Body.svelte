<script>

import HomeGuest from './HomeGuest.svelte'
import About from './About.svelte'
import Header from './Header.svelte'
import LoggedInLanding from './LoggedInLanding.svelte';

import router from "page"
import Amplify, { Auth } from 'aws-amplify';
    
import { createEventDispatcher } from 'svelte';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import {user} from './AppStore';

let page
let params
let loggedIn = false;

router("/", () => {page =  HomeGuest; } );
router("/about", () => {page = About; } )
router("/logged-in-landing", () => {page = LoggedInLanding})

router.start();
</script>

<div class="app">
    <Header />
    <div class="navbar">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/about">About</a>
    </div>      
    <svelte:component this={page}  />
    <!-- <svelte:component this={page} ...params /> -->    
</div>
