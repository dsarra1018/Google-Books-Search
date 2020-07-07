import axios from "axios";

export default {
  // Gets all books
  getBooks: () => {
    return axios.get("/api/books")
  },
  // Gets books with the given title
  searchBooks: (title) => {
    return axios.post("/search", {title: title});
  },
  // Saves books
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  },
  // Deletes books
  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  }
}