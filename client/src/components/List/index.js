import React from "react";
import Result from "../Results";

function List(props) {
  if(props.path === "/") {
    return(
      <div className="results-container">
        <h3>RESULTS FOUND</h3>
        {props.bookData.map(book => {
          const info = book.volumeInfo;
          return<Result
            title={info.title}
            authors={info.authors}
            description={info.description}
            link={info.canonicalVolumeLink}
            image={info.imageLinks}
            path={props.path}
            key={book.id}/>
        })}
      </div>
    );
  } else if(props.path === "/saved") {
    if(props.savedBooks.length > 0) {
      return(
        <div className="results-container">
          <h3>SAVED BOOKS</h3>
          {props.savedBooks.map(book => {
            return <Result
              title={book.title}
              authors={book.authors}
              description={book.description}
              link={book.link}
              image={book.image}
              id={book._id}
              path={props.path}
              key={book._id}/>
          })}
        </div>
      );
    } else {
        return(
          <div className="results-container">
            <h3>SAVED BOOKS</h3>
            <p>No Saved Books.</p>
          </div>
        );
    }
  }
}

export default List;