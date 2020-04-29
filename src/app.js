import AuthTabset from './AuthTabset.svelte'
import Body from './Body.svelte'
import RegistrationForm from './RegistrationForm.svelte';

import { Auth } from 'aws-amplify';

var regForm = new AuthTabset({
  target: document.getElementById("authenticate")
});

var body = new Body({
  target: document.getElementById("main")
});