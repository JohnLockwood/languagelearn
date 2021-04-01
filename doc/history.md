# Creating the front end:

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
