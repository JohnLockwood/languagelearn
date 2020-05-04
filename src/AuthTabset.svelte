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

function handleRegisterTab(event) {
    console.log(event.detail.option);
    if (event.detail.option === "sign-in") {
        login();
    }
    else {
        register();
    }
}

</script>

<div>
    {#if activeTab == REGISTER}<RegistrationForm on:registertab={handleRegisterTab} />
    {:else}<LoginForm on:logon  on:registertab={handleRegisterTab} />{/if}
</div>