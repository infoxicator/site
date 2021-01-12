import PostPreview from '../components/post-preview'
import { FormattedMessage } from 'react-intl'

export default function MoreStories({ posts }) {
  return (
<section className="bg-secondary text-secondary blog">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2"><FormattedMessage id="moreStoriesTitle" /></h1>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {posts.map(({ node }) => (
              <PostPreview
                key={node.slug}
                title={node.title}
                coverImage={node.featuredImage.node}
                date={node.date}
                author={node.author.node}
                slug={node.slug}
                excerpt={node.excerpt}
                tags={node.tags}
              />
            ))}
          </div>
        </div>
    </section>
  )
}
