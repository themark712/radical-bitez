import { useState, useEffect } from 'react';

// This is a custom hook
// Custom hook functions should start with "use"
// npx json-server --watch data/db.json --port 8000 
const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    //setTimeout(() => {     // simulate 2s delay in fetch
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {        // handles endpoint errors
            throw Error('Error: could not fetch for that resource');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch(err => {        // handle errors
          if(err.name === 'AbortError') {
            console.log('fetch aborted')
          }
          setIsPending(false);
          setError(err.message);
        });
    //}, 1000);

    return () => abortCont.abort();
  }, [url]);


  return { data, isPending, error }
}

export default useFetch;