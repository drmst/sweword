import React from "react";

const SearchBox = ({
  searchParameter,
  setSearchParameter,
  handleSearch,
  setTargetLanguage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchParameter);
  };
  return (
    <div className="search-box-container">
      <form className="search-box-form" onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          type="search"
          value={searchParameter}
          className="search-box-input"
          onChange={(e) => {
            setSearchParameter(e.target.value);
          }}
        />
        <button className="search-box-button" type="submit">
          Ara
        </button>
      </form>
      <div>
        <h3>Choose language</h3>
        <h3
          onClick={() => {
            setTargetLanguage("tur");
          }}
        >
          tur
        </h3>
        <h3
          onClick={() => {
            setTargetLanguage("swe");
          }}
        >
          swe
        </h3>
        <h3
          onClick={() => {
            setTargetLanguage("fin");
          }}
        >
          fin
        </h3>
      </div>
    </div>
  );
};

export default SearchBox;
