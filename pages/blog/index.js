import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import { SITE_TITLE } from '../../lib/constants'

export default function Index({ allPosts: { edges } }) {
  const morePosts = edges;

  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container className="text-secondary bg-secondary">
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
