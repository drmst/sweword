import React,{ useEffect, useState } from "react";

const WordContainer = ({ searchURL }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(searchURL)
    .then((response) =>{
      if(!response.ok){
      throw new Error("ağ cevabı hatalı");
    }
  return response.json();
})
    .then((result) => setData(result))
    .catch(error=>console.log(error));
  }, [searchURL]);

  console.log("datam", JSON.stringify(data));
  return (
  /*   {if(data[0]==="found"){
      console.log(data)
    }} */ //burda hata var
  );
};

export default WordContainer;
