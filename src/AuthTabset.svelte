<script>
import RegistrationForm from './RegistrationForm.svelte'
import LoginForm from './LoginForm.svelte'

const REGISTER = 0;
const LOGIN = 1;

let activeTab = REGISTER;

function activate(active) {
    activeTab = active;
} 

function register() {activate(REGISTER);}
function login() {activate(LOGIN);}

</script>

<div class="tabs is-boxed">
    <ul>
        <li on:click={register} class="{activeTab == REGISTER ? 'is-active' : ''}"><a href="javascript:void(0);">New Users - Register</a></li>
        <li on:click={login} class="{activeTab == LOGIN ? 'is-active' : ''}"><a href="javascript:void(0);">Existing Users - Login</a></li>
    </ul>
</div>
<div>
    {#if activeTab == REGISTER}<section class="tab-content"><RegistrationForm /></section>
    {:else}<section class="tab-content"><LoginForm /></section>{/if}
</div>