import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  return (
    <div>
      {news.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          author={item.author}
          url={item.url}
        />
      ))}
    </div>
  )
}

export default NewsList;