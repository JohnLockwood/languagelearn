import Link from 'next/link'
import Layout from '../components/Layout'
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });
import {withAuthenticator} from "@aws-amplify/ui-react";
import {AmplifySignOut} from "@aws-amplify/ui-react";

const SecretPage = () => (
  <Layout title="Secret | Next.js + TypeScript Example">
    <h1>Secret</h1>
    <AmplifySignOut />
    <p>If you see this, you're really authenticated!</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default withAuthenticator(SecretPage);
