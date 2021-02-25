/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {BooksContext} from '../../contexts/BooksContext';

function Search() {
  const {books, setBooks} = useContext(BooksContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBooks = async () => {
    await axios.get("/api/book").then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  };

  const searchByTitle = async () => {
    console.log(search);
    await axios.get("/api/book/" + search).then((res) => {
      console.log(res);
      console.log(res.data);
      if (res.data.length === 0) {
        alert("you don't own this book");
      } else {
        let books = [];
        res.data.forEach((element) => {
          books.push(element.Title);
        });
        let titles = books.toString();

        alert(` you own ${titles}`);
      }
    });
  };

  // html to render
  return (
    <Row md={4}>
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" onClick={searchByTitle}>
              Search
            </Button>
          </InputGroup.Prepend>
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="Search for books here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Search;
