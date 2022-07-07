import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";

const News = () => {
	const [news, setNews] = useState([]);

	const fetchNews = async () => {
		try {
			const response = await fetch(`https://hn.algolia.com/api/v1/search?query=react`);

			if(!response.ok) {
				throw new Error(`Opps! Not ok`);
			}

			const data = await response.json();
			setNews(data.hits);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchNews();
	}, []);
		

  return (
    <div>
      <h1>News Page</h1>
			<NewsList news={news} />
    </div>
  )
}

export default News;