import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"


/**
 * [id] が取りうるパスをすべて返す。
 */
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

/**
 * 与えられた `id` を持つ投稿を表示するために必要なデータを取得する。
 */
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: { postData }
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            { postData.title }
            <br/>
            { postData.id }
            <br/>
            { postData.date }
        </Layout>
    )
}
