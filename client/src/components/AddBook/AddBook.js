import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AddBook() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookType, setBookType] = useState('');
  


  useEffect(() => {
    handleBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBooks = async () => {
    await axios.get("/api/book").then((res) => {
      console.log(res.data);
      setBooks(res.data);
      console.log(books);
    });
  };

  const handleSubmit = () => {
    console.log(title, author, bookType)
    axios({
      method: 'post',
      url: 'api/book',
      data: {
        Title: title,
        Author: author,
        BookType: bookType
      }
    })
    handleBooks();
  }



  // html to render
  return (
    <Row md={4}>
    <Col>
      <Form>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" value={author} onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="BookType">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="BookType" value={bookType} onChange={e => setBookType(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
</Button>
      </Form>
    </Col>
  </Row>
  );
}
export default AddBook;