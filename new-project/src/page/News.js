import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";

const News = () => {
	const [news, setNews] = useState([]);
	const [search, setSearch] = useState('react');
	const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=react`);

	const fetchNews = async () => {
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
	}

	useEffect(() => {
		fetchNews();
	}, [url]);

	const searchCangeHandler = (event) => {
		setSearch(event.target.value);
	}
	
	const searchHandler = (event) => {
		event.preventDefault();
		setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`);
	}

  return (
    <div>
      <h1>News Page</h1>
			<form onSubmit={searchHandler}>
				<input
					type='text'
					value={search}
					onChange={searchCangeHandler}
				/>
				<button type='submit'>Search</button>
			</form>
			<NewsList news={news} />
    </div>
  )
}

export default News;