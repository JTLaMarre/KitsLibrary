import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import BooksContextProvider from "../contexts/BooksContext";

function Comics() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleBooks();
  }, []);

  const handleBooks = async () => {
    await axios.get("/api/book/Comics").then((res) => {
      console.log(res.data);

      setBooks(res.data);
    });
  };

  const removeBook = (id) => {
    console.log(`Remove:${id}`);
    axios({
      method: "delete",
      url: "/api/book/" + id,
    });
    console.log("Removed!!");
    handleBooks();
  };

  return (
    <BooksContextProvider>
      <Container>
        <Jumbotron fluid id="jumbo">
          <Container>
            <h1 id="bar"> Comics </h1>
          </Container>
        </Jumbotron>
       

        {books
          .sort(function (a, b) {
            return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
          })
          .map((book) => {
            return (
              <Row md={4}>
                <Col>
                  <p>Title:{book.Title}</p>
                </Col>
                <Col>
                  <p>Author:{book.Author}</p>
                </Col>
                <Col>
                  <p> {book.BookType}</p>
                </Col>
                <Col>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeBook(book._id)}
                  >
                    delete
                  </button>
                </Col>
              </Row>
            );
          })}
      </Container>
    </BooksContextProvider>
  );
}

export default Comics