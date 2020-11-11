import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Intro from '../components/intro';

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Infoxicator.com | React | Micro Frontends</title>
        </Head>
        <Container className="text-secondary bg-secondary">
         <Intro />
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
