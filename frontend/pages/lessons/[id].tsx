import {GetStaticProps, GetStaticPaths} from 'next';
import {sampleLessonData} from "../../utils/sample-data";
import {Lesson} from "../../interfaces";
import Layout from "../../components/Layout";

type Props = {
    item?: Lesson
    errors?: string
}

type ItemDetailProps = {
    item: Lesson
}

const ItemDetail = ({item: lesson}: ItemDetailProps) => (
    <div>
    <h1>Item id {lesson.id}</h1>
    <p>
        {lesson.native_text}
    </p>
    <p>
        {lesson.foreign_text}
    </p>
    </div>
)


const contents = ({item, errors}: Props) => {
    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript Example">
                <p>
                    <span style={{color: 'red'}}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    return (
        <Layout
            title={`${
                item ? item.native_text : 'User Detail'
            } | Next.js + TypeScript Example`}
        >
            {item && <ItemDetail item={item}/>}
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = sampleLessonData.map((lesson) => ({
        params: { id: lesson.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const item = sampleLessonData.find((data) => data.id === id)
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}
export default contents;
