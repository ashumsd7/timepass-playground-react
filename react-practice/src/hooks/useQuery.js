import React, {useState, useEffect} from "react";

function useQuery(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const getData = async () => {
    setLoading(true);
    const res = await fetch(url);
    const parsedData = await res.json();
    setData(parsedData);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);

return {data,loading}
}

export default useQuery;
