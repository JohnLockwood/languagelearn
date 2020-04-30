<script>

import HomeGuest from './HomeGuest.svelte'
import About from './About.svelte'
import Header from './Header.svelte'

import router from "page"

let page
let params

router("/", () => page = HomeGuest );
router("/about", () => page = About );
router.start();


</script>
<div class="app">
    <Header />
    <div class="navbar">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/about">About</a>
    </div>   
    <svelte:component this={page} params={params} />    
</div>
