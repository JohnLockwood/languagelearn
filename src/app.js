import AuthTabset from './AuthTabset.svelte'
import RegistrationForm from './RegistrationForm.svelte';

import { Auth } from 'aws-amplify';

var regForm = new AuthTabset({
  target: document.getElementById("authenticate")
});
