# Creating the Front End

## Step .01

Starting in the root, based on https://github.com/vercel/next.js/tree/canary/examples/with-typescript

```
npx create-next-app --example with-typescript frontend
cd frontend
npm install --save-dev typescript
npm install --save-dev @types/react @types/react-dom @types/node
npm install react react-dom next # Maybe not necessary with npm start (below)? 
node_modules\.bin\next
OR 
npm run dev
```

## Step .02

Based partly on https://aws.amazon.com/blogs/mobile/ssr-support-for-aws-amplify-javascript-libraries/

```
# In frontend directory:
amplify init .
# Select yes to use a profile, and amplify-user
npm run build
amplify run
```

## Step 0.3
Now add code based on link in Step .03

## Step .04 
Add simple amplify auth per https://docs.amplify.aws/lib/auth/getting-started/q/platform/js

```
amplify add auth
# Don't push yet see below
```

Note that UsernameAttributes can't be updated once set, so before doing a push, add UsernameAttributes to this section in amplify/backend/auth/some_cfn_template.yml
```
    Type: AWS::Cognito::UserPool
    UpdateReplacePolicy: Retain
    Properties:
      UserPoolName: !If [ShouldNotCreateEnvResources, !Ref userPoolName, !Join ['',[!Ref userPoolName, '-', !Ref env]]]
      UsernameAttributes:
        - email

```
You also have to get rid of the current !Ref to userNameAttributes, if any.  There may be other things to set here too like non-required attributes on Schema, see [AWS::Cognito::UserPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html).

Also what I fussed with a while is you have to get the difference between these things: 

1.  A complete default, very little-customizable UI:

```
import {withAuthenticator} from "@aws-amplify/ui-react";
```

2. A more customizable but bare bones:

```
import {withAuthenticator} from "@aws-amplify/ui-react";
```

Once you begin to get your head around that you can add simple customization such as changing the button color or other theming elements (See components/AmplifyUITheme.tsx and pages/secret_bad_custom_auth.tsx).  Yet a lot of that stuff is deprecated.  But to the extent that you can use it, see the customization options in the [Authenticator](https://docs.amplify.aws/ui/auth/authenticator/q/framework/react) documentation.

This for example shows how to customize the [form fields](https://docs.amplify.aws/ui/auth/authenticator/q/framework/react#customization) to remove the phone number, and the [basic usage](https://docs.amplify.aws/ui/auth/authenticator/q/framework/react#basic-usage) shows a potential way to use this without "withAuthenticator" by just having an authenticator on the page?  And this could probably set the theme as we do pages/in secret_bad_custom_auth.tsx.


# Creating the Back End

1. In root:

```
rd backend
sam init
# Select 1 AWS Quick Start Templates 1 for zip, 1 for latest node version
# Project name backend
# Select 8 Quick Start: Web Backend
# In template.yml, change description "backend" to languagelearn_backends
sam build 
sam local invoke putItemFunction --event events/event-post-item.json 
sam local invoke getAllItemsFunction --event events/event-get-all-items.json
```
Above stuff didn't work as is.  Trying it with dynamodb running locally.  To do this ran
(Based on https://hub.docker.com/r/amazon/dynamodb-local)
```
docker run -d -p 8000:8000 --name dynamodb amazon/dynamodb-local
aws dynamodb list-tables --endpoint-url http://127.0.0.1:8000
```