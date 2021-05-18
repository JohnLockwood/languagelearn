import {GetServerSideProps} from 'next'
import Link from 'next/link'

// import { Lesson } from '../../interfaces'
// import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../../components/Layout'
// import List from '../../components/List'
import {useRouter} from "next/router";

type Props = {
  id: string
}

const WithServerSideProps = (props: Props) => (
  <Layout title="Lessons List">
    <h1>Lessons</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>{`You are currently on: /lessons/public/${props.id}`}`</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
    const router = useRouter()
    const {id} = router.query
    return {props: {id}}
}

export default WithServerSideProps
