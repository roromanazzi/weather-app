import React, { useState, useEffect } from "react";

export const useHttp = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    try {
      const sendRequest = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setInfo(data);
      };
      sendRequest();
    } catch (error) {
      console.log(error);
    }
  }, []);
};
