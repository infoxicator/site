export default function PostTitle({ children }) {
  return (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-5 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
