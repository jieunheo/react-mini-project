import { createContext, useState } from "react";


export const GlobalContext = createContext({
  searchParam: '',
  changeHandler: () => {},
  submitHandler: () => {},
  movieList: [],
  loading: false,
  error: false
});

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    setSearchParam(event.target.value);
  };

  const submitHandler = async () => {
    setLoading(true);
    setError(null);
    const response =  await fetch(`http://www.omdbapi.com/?s=${searchParam}&apikey=2b3af0ea`);

    if(!response.ok) {
      setMovieList([]);
      setLoading(false);
      setError("Something Worng!");
    }

    const data = await response.json();
    console.log(data);

    if(data) {
      if(!data.Error) {
        setMovieList([...data['Search']]);
        console.log(movieList);
      } else {
        setError(data.Error);
      }
      setLoading(false);
    }
  };

  const contextValue = {
    searchParam,
    changeHandler,
    submitHandler,
    movieList,
    loading,
    error
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;