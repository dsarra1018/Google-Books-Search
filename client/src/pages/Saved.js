import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

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
      <div>
        <Nav />
        <Jumbotron />
      </div>
    )};
}

export default Saved;