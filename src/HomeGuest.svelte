<script>
import Authenticate from './AuthTabset.svelte'
</script>

<div class="app-body columns">
    <div class="column">
        <h1>Cool Marketing Fluff</h1>
        <ul>
            <li>Find Language Partners</li>
            <li>Marry Them</li>
            <li>Yet another chat demo</li>
        </ul>
        </div>
    <div id="authenticate" class="column">
        <Authenticate on:logon />
    </div>
</div>
