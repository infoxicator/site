import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import { SITE_TITLE } from '../../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container className="text-secondary bg-secondary">
          {morePosts.length > 0 && <MoreStories posts={morePosts} title="allPostsTitle" /> }
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, locale }) {
  console.log({ locale });
  const categoryId = locale === 'en' ? 22 : 23;
  const allPosts = await getAllPostsForHome(preview, categoryId)
  return {
    props: { allPosts, preview },
  }
}
