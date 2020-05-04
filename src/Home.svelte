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
            <h1>Cool Marketing Fluff</h1>
            <ul>
                <li>Find Language Partners</li>
                <li>Marry Them</li>
                <li>Yet another chat demo</li>
            </ul>
            </div>
        <div id="authenticate" class="one-column">
            <Authenticate on:logon />
        </div>
    </div>
    {:else}
    <div class="column"><h1>You're Logged In.  Don't screw it up.</h1></div>
    {/if}
</content>
