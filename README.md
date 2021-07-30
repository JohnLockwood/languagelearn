# LanguageLearn (or what have you)

## Architectural choices:

### Language

Typescript everywhere.

### Back end

We have made the decision to move everything to Google, because it's generally better than AWS for developer experience.
AWS Translate is somewhat cheaper, but both get "The event takes place" wrong in Spanish.  

* For static rendering and for APIs:  Express running in a Google function.
* Database:  Firestore
* Authentication: Google Firebase

### Front end

* React 
* We will not do server side rendering in React, instead we'll just use it to handle interactions on the page.  Site will be served generally from express, with caching using browser and CDN (https://firebase.google.com/docs/hosting/manage-cache).  
* Media, JS, and other static resources can be served from Google File Storage.
* ReactNative if needed for mobile.
* CSS Framework: TBD.  Probably Tailwind?