import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import Link from "next/link"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
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
    </Layout>
  )
}
