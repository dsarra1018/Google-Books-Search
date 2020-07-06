import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Nav() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span>Google Books</span>

      <div className="nav-items">
        <Link className="links" to="/">Search</Link> 
        <Link className="links" to="/saved">Saved</Link>
      </div>
      
    </nav>
  );
}

export default Nav;