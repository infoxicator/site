export default function Avatar({ author }) {
  const name =
    author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name

  return (
    <div className="flex items-center">
      <img
        src={author.avatar.url}
        className="w-40 h-40 rounded-full mr-4"
        alt={name}
      />
    </div>
  )
}
