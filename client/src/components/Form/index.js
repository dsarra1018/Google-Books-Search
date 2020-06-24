import React from "react";

function Search(props) {
  return(
    <div>
      <h4>Book Search</h4>
      <form className="book-search">
        <label htmlFor="book-input" form="search-form">Book:</label>
        <input type="text" name="book-input" form="book-search" onChange={(e) => props.handleChange(e)} placeholder="Enter a book title" required></input>
        <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
      </form>
    </div>
  );
}

export default Search;