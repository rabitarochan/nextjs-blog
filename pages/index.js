import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import Date from "../components/date"
import Link from "next/link"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostData } from "../lib/posts"

export async function getStaticProps() {
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Kengo. I'm a software engeneer. You can contact me on <a href="https://twitter.com/rabitarochan" target="_blank">Twitter</a></p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '})
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={ `/posts/${id}` }>
                <a>{ title }</a>
              </Link>
              <br/>
              <small className={ utilStyles.lightText }>
                <Date dateString={ date } />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
