import { useEffect } from 'react';

const useFetch = (url) => {
  useEffect(() => {
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        console.log(y);
      });
  }, [url]);
};

export default useFetch;
