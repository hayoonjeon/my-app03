import React, { useEffect, useState } from 'react';

function UseFetch(url) {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(url)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      console.log(data);
      setData(data);
    })
    .catch((error)=>console.error("Error :", error));
  },[url]);

  return data;
}

export default UseFetch;