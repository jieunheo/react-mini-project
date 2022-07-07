import { useState } from "react";

const NewsForm = ({ setUrl }) => {
	const [search, setSearch] = useState('react');

	const searchCangeHandler = (event) => {
		setSearch(event.target.value);
	}
	
	const searchHandler = (event) => {
		event.preventDefault();
		setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`);
	}

  return (
    <form onSubmit={searchHandler}>
      <input
        type='text'
        value={search}
        onChange={searchCangeHandler}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default NewsForm;