import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

const useGetGifs = (category) => {
  const [inf, setInf] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((e) => {
      setInf({
        data: [...e],
        loading: false,
      });
    });
  }, [category]);

  return inf;
};

export default useGetGifs;
