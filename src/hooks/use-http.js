import React, { useState, useEffect, useRef } from "react";

export const useHttp = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const isFetchingRef = useRef(false);

  useEffect(() => {
    const sendRequest = async () => {
      isFetchingRef.current = true;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
      isFetchingRef.current = false;
    };

    if (!isFetchingRef.current) {
      sendRequest();
    }
  }, []);

  return { data, status };
};
