# LanguageLearn (or what have you)

## Project structure

```
taskfile.yml  # Consolidate common tasks for both front'end and 
/browser # For now try putting the necessary tailwind pieces
    - /local # Local html experiements using html + CDN (Do we need this?)
    - /npm   # npm to build necessary 
/firebase
    - /functions # Root of firebase functions, npm for express app
```

## Architectural choices:

### Platform and Languages:
* DECIDED:  We have made the decision to move everything to Google, because it's much better than AWS for developer experience.
AWS Translate is somewhat cheaper, but both get "The event takes place" wrong in Spanish.
* DECIDED?:  For static rendering and for APIs:  Express running in a Google function.  This one gets a question mark because Google functions would also handle flask fine.  However, if we can figure out a good hot reloading scheme without too much trouble, Typescript would be fun to work in.  [ts-node-dev](https://github.com/wclr/ts-node-dev) is worth a look.  TypeScript for sure on back-end. There may not be much JS to write on front end given Alpine, but we can be a bit looser here I think.
* DECIDED Database:  Firestore until proven guiltqy.
* DECIDED: Authentication: Google Firebase
* DECIDED:  We will not do server side rendering in React/Vue etc, instead we'll just use it to handle interactions on the page.  Site will be served generally from express, with caching using browser and CDN (https://firebase.google.com/docs/hosting/manage-cache).  For setting up firebase hosting more specifically, see the video at [Connect Cloud Functions to Firebase Hosting](https://firebase.google.com/docs/hosting/functions).  We've proven the concept locally.  Todo add [Nunjucks](https://mozilla.github.io/nunjucks/api.html#express) as the template engine.
* DECIDED: Alpine.js and tailwind on the front end.
* DECIDED : Media, JS, and other static resources can be served from Google File Storage.
* Mobile is out of scope for now.  TBD if back in scope.

