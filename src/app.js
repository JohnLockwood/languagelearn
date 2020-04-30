import Body from './Body.svelte'

import { Auth } from 'aws-amplify';

var body = new Body({
  target: document.getElementById("main")
});