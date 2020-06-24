import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/Form";
import API from "../utils/API";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book_input: "",
      bookData: []
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({book_input: e.target.value})
  }

  handleSearchClick(e) {
    e.preventDefault();
    API.getBooks(this.state.book_input)
      .then(res => {
        this.setState({bookData: res.data});
        this.setState({book_input: ""});
      });
  }
  render() {
    return(
      <div>
        <Nav />
        <Jumbotron />
        <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
      </div>
    );
  }
}

export default Search;