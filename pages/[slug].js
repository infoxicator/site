import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Container from '../components/container'
import PostBody from '../components/post-body'
import MoreStories from '../components/more-stories'
import PostHeader from '../components/post-header'
import SectionSeparator from '../components/section-separator'
import Layout from '../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/api'
import Head from 'next/head'
import Tags from '../components/tags'
import Prism from "prismjs";
import { SITE_URL } from '../lib/constants'
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-json.min";
import "prismjs/components/prism-bash.min";
import "prismjs/plugins/line-numbers/prism-line-numbers.min";
import Loading from '../components/loading';
import Custom404 from '../pages/404';

export default function Post({ post, posts, preview }) {

  useEffect(() => {
    Prism.highlightAll();
  });

  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return (<>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Custom404 />
    </>)
  }

  const postDescription = post?.excerpt?.replace(/<[^>]+>/g, '');

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Loading />
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta
                  key="description"
                  name="description"
                  content={postDescription}
                />
                <meta
                  key="og:image"
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
                <link key="canonical" rel="canonical" href={`${SITE_URL}blog`} />
                <meta key="og:url" property="og:url" content={`${SITE_URL}${post?.slug}`} />
                <meta key="og:title" property="og:title" content={post.title} />
                <meta key="og:description" property="og:description" content={postDescription} />
                <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
                <meta key="twitter:title" name="twitter:title" content={post.title} />
                <meta key="twitter:creator" name="twitter:creator" content="@infoxicador"/>
                <meta key="twitter:description" name="twitter:description" content={postDescription} />
                <meta key="twitter:image" name="twitter:image" content={post.featuredImage?.node?.sourceUrl} />
                {/* <meta name="keywords" content="foo, bar"></meta> */}
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
