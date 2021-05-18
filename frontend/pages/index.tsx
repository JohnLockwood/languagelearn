import Link from 'next/link'
import Layout from '../components/Layout'
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
