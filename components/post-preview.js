import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Tags from '../components/tags'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags
}) {
  return (
    <Link as={`/${slug}`} href="/[slug]">
    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
       <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${coverImage?.sourceUrl}`}} />
        <div className="bg-default text-default w-11/12 -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
        <div className="title-post font-medium">
            <div
              dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        <div
          className="summary-post text-base truncate-3-lines"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        {tags.edges.length > 0 && <Tags tags={tags} />}
      </div>
    </div>
    </Link>
  )
}
