import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, options) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!url) return;

    async function getMovies() {
        try{
            const res = await axios.get(url, options);
            setData(res.data);
            setLoading(false);
        }
        catch (err){
            setError(err);
            setLoading(false);
        }
    }
    getMovies();
  }, [url]);
  return {data, loading, error};
};

export default useFetch;
