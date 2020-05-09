<script>
import Authenticate from './AuthTabset.svelte'

import { user } from './AppStore';    
let userLocal = null;
user.subscribe(value => userLocal = value);

</script>

<content> 
    {#if userLocal == null}
    <div class="two-columns">
        <div class="column">
            <h1>Converse, Translate, Study</h1>
            <ul>
                <li>Find and chat with language partners</li>
                <li>Build and study materials based on live conversations</li>                
            </ul>
            </div>
        <div id="authenticate" class="column">
            <Authenticate on:logon />
        </div>
    </div>
    {:else}
    <div class="column"><h1>You're Logged In.  Don't screw it up.</h1></div>
    {/if}
</content>
