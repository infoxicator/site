import { useEffect } from 'react';
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import MoreStories from '../components/more-stories'
import PostHeader from '../components/post-header'
import SectionSeparator from '../components/section-separator'
import Layout from '../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/api'
import PostTitle from '../components/post-title'
import Head from 'next/head'
import Tags from '../components/tags'
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-json.min";
import "prismjs/components/prism-bash.min";

export default function Post({ post, posts, preview }) {

  useEffect(() => {
    Prism.highlightAll();
  });

  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage.node}
                date={post.date}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                <div className="max-w-2xl mx-auto">
                  {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                </div>
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  }
}
