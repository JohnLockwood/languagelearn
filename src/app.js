import TestDiv from './RegistrationForm.svelte';

import { Auth } from 'aws-amplify';

var testDiv = new TestDiv({
  target: document.getElementById("registration")
});