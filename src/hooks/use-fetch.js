import { useEffect, useState } from 'react';


const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData () {
      const response = await fetch(url);
      const data = await response.json();
      if(data && data.length > 0) setData(data);
    }
    getData();
  }, []);

  return {data}
};

export default useFetch;