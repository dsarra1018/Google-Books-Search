import React from "react";
import "./style.css";

function Search(props) {
  return(
    <div className="search-div">
      <h4 className="search-head">Book Search</h4>
      <form className="book-search">
        <label htmlFor="book_input" form="book-search">Book:</label>
        
        <br></br>
        <input type="text" name="book_input" id="book_input" form="book-search" onChange={(e) => props.handleChange(e)} placeholder="Enter a book title" required/>
        
        <br></br>
        <button type="submit" className="submit-btn float-right" onClick={(e) => props.handleSearchClick(e)}>Search</button>

        <br></br>
        <hr></hr>
      </form>
    </div>
  );
}

export default Search;