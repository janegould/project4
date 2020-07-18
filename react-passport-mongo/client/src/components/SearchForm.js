import React from "react";
import style from "./style.module.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className= {style.head}
          placeholder="Search for a Gif"
          id="search"
        />
        <button  style ={style.button} onClick={props.handleFormSubmit} >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;