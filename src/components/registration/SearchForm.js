import React, { useState } from "react";

import useSearch from "./useSearch";
import ValidateSearch from "./ValidateSearch";

const SearchForm = () => {
  //SEARCH FORM

  const [isSubmitted, setIsSubmitted] = useState(false);
  const Submitforms = () => {
    setIsSubmitted(true);
  };

  const { searchValues, handleChangeSearch, onSubmitSearch, error } = useSearch(
    Submitforms,
    ValidateSearch
  );

  const { name, date } = searchValues;

  return (
    <section className="search-form">
      <p className="search-subtext">Please enter date of birth and name to search</p>
      <form onSubmit={onSubmitSearch} noValidate>
        
        <div className="form-control">
          <input
            placeholder="enter name"
            type="text"
            onChange={handleChangeSearch}
            id="name"
            name="name"
            value={name}
          ></input>
          {error.name && <p className="error">{error.name}</p>}
        </div>
        <div className="form-control">
          <input
            onChange={handleChangeSearch}
            type="date"
            id="date"
            name="date"
            value={date}
          ></input>
          {error.date && <p className="error">{error.date}</p>}
        </div>

        <button type="submit">SEARCH</button>
      </form>
      
    </section>
  );
};

export default SearchForm;
