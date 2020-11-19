import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      alt="cover image"
    />
  )
  return (
    <>
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}
