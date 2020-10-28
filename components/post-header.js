import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
}) {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <PostTitle>{title}</PostTitle>
      <div className="mb-3 text-lg border-b-5 border-primary">
          Published <Date dateString={date} />
        </div>
        <hr className="w-1/3 border-t-4 border-primary mb-5" />
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
      </div>
    </div>
  )
}
