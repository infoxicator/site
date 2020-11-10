export default function Tags({ tags }) {
  return (
      <>
        {tags.edges.map((tag, index) => (
          <div key={index} className="inline-block mt-5">
          <button className="py-2 px-4 shadow-md no-underline rounded-full bg-primary text-primary font-sans font-semibold text-sm border-blue hover:text-inverse hover:bg-primary-light focus:outline-none active:shadow-none mr-2">
                {tag.node.name}
              </button>
          </div>
        ))}
    </>
  )
}
