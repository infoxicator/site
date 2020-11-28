import Image from 'next/image'

export default function Avatar({ author }) {
  const name =
    author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name

  return (
      <Image
        src={author.avatar.url}
        className="w-40 h-40 rounded-full mr-4 inline"
        alt={name}
        width={160}
        height={160}
      />
  )
}
