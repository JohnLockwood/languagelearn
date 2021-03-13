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

## Learning and other activities to be scheduled:

* [x] Revisit the business plan.
* New technical plan including detail on lesson pages.  We're in the process
  of learning what this might be, and some approaches we're trying as of now are:
    * React, [NextJS](https://nextjs.org) to get the page breakdown between front and back end right (we hope), and Material UI.  We're hoping [this Udemy course](https://hitachivantara.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/) will teach us this as well as letting us find out if it's the right approach.
    * (Possibly) Amplify (And by extension, GraphML etc. for the back end and the auth).

* Webstorm

## Technical choices already rejected or deferred:

* **Django** -- Too hard to see how to integrate SEO with a beautiful front end without becoming more of a designer. This is one we might revisit if the rest of these dumb ideas don't pan out.
* **Typescript** -- See our original comment.  "Typescript might be worth learning, but it does complicate things in the short term."
* **Serverless Framework** "Look what they've done to my AWS credentials, ma."  Security issues. With a dependency on serverless and using the Amplify stuff too, I think trying this will lead to a hot mess: [Multi-Env Next/JS with AWS Amplify Serverless](https://dev.to/aarongarvey/multi-env-next-js-app-with-aws-amplify-serverless-3571).  So we'll let that guy go down that road. I'm busy here. :)

