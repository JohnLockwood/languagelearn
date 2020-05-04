<script>

import Home from './Home.svelte'
import About from './About.svelte'
import Pricing from './Pricing.svelte'
import Header from './Header.svelte'
import LoggedInLanding from './LoggedInLanding.svelte';

import router from "page"
import Amplify, { Auth } from 'aws-amplify';
    
import {user} from './AppStore';

let page
let params
let loggedIn = false;

router("/", () => {page =  Home; } );
router("/home", () => {page =  Home; } );
router("/about", () => {page = About; } )
router("/pricing", () => {page = Pricing; } )
router("/logged-in-landing", () => {page = LoggedInLanding})
router.start();

</script>

<div class="app">
    <Header />   
    <svelte:component this={page}  />
</div>
