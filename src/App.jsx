import { useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box";
import WordContainer from "./components/word-container";
const BASE_URL = "http://lexin.nada.kth.se/lexin/service?searchinfo=to,swe_";

/* http://lexin.nada.kth.se/lexin/service?searchinfo=to,swe_swe,hej&output=JSON */

function App() {
  const [targetLanguage, setTargetLanguage] = useState("swe");

  const [searchParameter, setSearchParameter] = useState("");
  const handleSearch = (searchParameter) => {
    const searchURL = `${BASE_URL}${targetLanguage},${searchParameter}&output=JSON`;
    console.log(searchURL);
  };

  return (
    <div>
      <SearchBox
        searchParameter={searchParameter}
        setSearchParameter={setSearchParameter}
        handleSearch={handleSearch}
      />
      <WordContainer />
    </div>
  );
}

export default App;
