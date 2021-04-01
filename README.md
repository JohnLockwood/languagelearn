# LanguageLearn.pro

This is the home of code and documentation supporting my English teaching business.  The name of the business is subject to change before launch.

## Vision

The current vision is of an English Language Learning site focusing on Spanish speaking learners.  This was the same vision as in 
legacy/maestro-de-ingles but now we are reworking the projected development frameworks based on the architectural constraints (next section).

## Architectural constraints:

### Constraints that Django would have probably supported well:

* Lesson authoring should be simple, ideally an editor or similar + audacity.
* Authentication needs to be cheap and easy to do.
* Must support SEO well -- high static content
* Must be tech I want to use (could also go for next category?)
* Should be less than $100 / month for the first three years.

### Constraints that Django would have supported less well:
* Must be beautiful
* Must be interactive
* Must enable web + android + ios.

## Additional planning needed

* In general I'm not sure the business (as opposed to the technology) may not be thought out enough.
* Lesson pages need further elaboration and design.

## Things that are working well

* Material UI.  So far so good with this.  Using this and NextJS for front end it looks like.
  * See the [Interactive List Demo](https://material-ui.com/components/lists/#interactive) for some ideas we can use for the learning cards.  But See [Cards](https://material-ui.com/components/cards/) too.  For the Kanban board idea, see [Transfer List](https://material-ui.com/components/transfer-list/).  (Actually those demos are lame :( ).
  * NextJS - Uses getStaticProps and getServerProps to distinguish between static content and dynamic.


## Learning and other activities to be scheduled:

### Step 1

* Here, move existing source to a branch under legacy, then...
* Create two folders: frontend, backend

# The One True Architecture

# Front end:
* Work through -- in TypeScript ([see this first](https://www.velotio.com/engineering-blog/real-time-react-app-built-using-aws-amplify-graphql)) -- the [React Amplify Tutorial](https://docs.amplify.aws/start/getting-started/installation/q/integration/react).  
* When you get to the authentication part, consult [Amplify Material UI](https://www.npmjs.com/package/amplify-material-ui) and swap the imports and authenticator from there.
* Don't add an API
* Do set up Auth, or try to, and try the auth workflow
  * Set up various Groups:
    * Guest (allow)
    * Registered
    * Premium
    * Admin
  
# Back end
* Restful using API Gateway and Lambda
* SAM CLI for development




### Notes on Learning
* Architectural choices especially around auth.  Amplify looks like it can handle everything we need to do, albeit not as static pages.  Search for "Amplify API Group authorization" or "Setup Authorization Rules" or see AmplifyAuthorizationByGroupsDoc.pdf in this directory.
Amplify is weaker on static pages, and mostly orthogonal to NextJS I think, but it might be a much quicker approach since it's more of an all-in approach.  React is well supported with auth components.  Customization is available, see
[this doc](https://docs.amplify.aws/ui/customization/theming/q/framework/react), and there are also some [Material UI components](https://github.com/aws-samples/aws-amplify-material-ui-js-demo) available -- this is nice, done in typescript.  Should set that up in a demo instead of the [JS Demo I'm working on](https://docs.amplify.aws/start/getting-started/auth/q/integration/react).
* [x] Revisit the business plan.
* New technical plan including detail on lesson pages.  We're in the process
  of learning what this might be, and some approaches we're trying as of now are:
    * React,  and Material UI.  We're hoping [this Udemy course](https://hitachivantara.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/) will teach us this as well as letting us find out if it's the right approach.

* Webstorm

## Technical choices already rejected or deferred:

* **Django** -- Too hard to see how to integrate SEO with a beautiful front end without becoming more of a designer. This is one we might revisit if the rest of these dumb ideas don't pan out.
* **Typescript** -- See our original comment.  "Typescript might be worth learning, but it does complicate things in the short term."
* **Serverless Framework** "Look what they've done to my AWS credentials, ma."  Security issues. With a dependency on serverless and using the Amplify stuff too, I think trying this will lead to a hot mess: [Multi-Env Next/JS with AWS Amplify Serverless](https://dev.to/aarongarvey/multi-env-next-js-app-with-aws-amplify-serverless-3571).  So we'll let that guy go down that road. I'm busy here. :)

