import React from "react";
import List from "../components/List";
import API from "../utils/API";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBooks: []
    }
  }

  componentWillMount() {
    API.getBooks().then(res => {
      this.setState({savedBooks: res.data});
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return(
      <main>
        <Nav />
        <Jumbotron />
        <List savedBooks={this.state.savedBooks} path={this.props.match.path}/>
      </main>
    )}
}

export default Saved;
