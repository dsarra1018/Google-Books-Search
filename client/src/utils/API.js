import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(title) {
    return axios.get("/search", {title: title});
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};