import React from "react";
import SearchForm from "../components/Form";
import List from "../components/List";
import API from "../utils/API";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

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

  handleChange = (e) => {
    e.preventDefault();
    this.setState({book_input: e.target.value})
  }
 
  handleSearchClick = (e) => {
    e.preventDefault();
    API.searchBooks(this.state.book_input)
      .then(
        (res) => {
          this.setState({bookData: res.data});
          this.setState({book_input: ""});
      });
  }
  
  render() {
    return(
        <main>
          <Nav />
          <Jumbotron />
          <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
          {(this.state.bookData.length > 0)?
            <List bookData={this.state.bookData} path={this.props.match.path}/> : null}
        </main>
    )
  }
}

export default Search;