import styles from './post-body.module.css'

const createMarkup = (markup) => ({ __html: markup });

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </div>
  )
}
