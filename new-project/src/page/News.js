import { useEffect, useState } from "react";
import NewsForm from "../components/NewsForm";
import NewsList from "../components/NewsList";

const News = () => {
	const [news, setNews] = useState([]);
	const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=react`);
	const [loading, setLoading] = useState(false);

	const fetchNews = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);

			if(!response.ok) {
				throw new Error(`Opps! Not ok`);
			}

			const data = await response.json();
			setNews(data.hits);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchNews();
	}, [url]);

	let content;
	if(!loading && (news === null || news.length === 0)) {
		content = <p>No data</p>;
	} else if(!loading) {
		content = <NewsList news={news} />;
	}
  return (
    <div>
      <h1>News Page</h1>
			<div className='news-wrap'>
				<NewsForm setUrl={setUrl} />
				{loading && <p>Loading...</p>}
				{content}
			</div>
    </div>
  )
}

export default News;