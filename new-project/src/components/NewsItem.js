

const NewsList = ({ title, author, url }) => {
  return (
    <div className='news-card'>
      <h2 className='news-title'>
        <a href={url} target='_blank' rel="noreferrer">{title}</a>
      </h2>
      <p className='news-author'>{author}</p>
    </div>
  )
}

export default NewsList;