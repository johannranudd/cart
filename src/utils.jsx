import { useState, useEffect, useCallback } from 'react';

export const useFetch = async (url) => {
  const [response, setResponse] = useState([]);

  const res = await fetch(url);
  const data = await res.json();
  //   setResponse(data);
  console.log(data);
  return data;
};
