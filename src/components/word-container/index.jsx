import { useEffect, useState } from "react";

const WordContainer = ({ searchURL }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(searchURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("ağ cevabı hatalı");
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, [searchURL]);

  /* console.log("datam", JSON.stringify(data)); */
  return (
    <div>
      {data && data.Status === "found" && (
        <div>
          {data.Result.map((resultItem, index) => (
            <div key={index}>
              <h2>{resultItem.Value}</h2>
              <h3>{resultItem.Type}</h3>
             {resultItem.}
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordContainer;
