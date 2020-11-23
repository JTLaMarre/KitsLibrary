import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function App() {

  const [books, setBooks] = useState([])
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const[bookType, setBookType]=useState('');
  const[search, setSearch]=useState('');

  useEffect(() => {
    handleBooks();
  }, [])

  const handleBooks = async () => {
     await axios.get('/api/book')
      .then((res => {

        console.log(res.data)
        setBooks(res.data)
      }))
  }

  const removeBook = (id) => {
    console.log(`Remove:${id}`)
    axios({
      method: 'delete',
      url: '/api/book/' + id
    })
    console.log('Removed!!')
    handleBooks();
  }
  const handleSubmit = ()=>{
    console.log(title, author, bookType)
    axios({
      method:'post',
      url:'api/book',
      data:{
        Title:title,
        Author:author,
        BookType:bookType
      }
    })
    handleBooks();
  }

  const searchByTitle= async ()=>{
    console.log(search)
    await axios.get('/api/book/'+search)
    .then((res)=>{
      console.log(res.data.Title)
    })
  }


  return (
    <Container>
      <Row>
        <Col>
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary" onClick={searchByTitle}>Button</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" placeholder="Search for books here" value={search} onChange={e=>setSearch(e.target.value)} />
  </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)}/>
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

      {books.map((book) => {
        return (
          <Row>
            <Col>
              <p>|Title:{book.Title}| |Author:{book.Author}|   |{book.BookType}|</p>
            </Col>
            <Col>
              <button className="btn btn-danger" onClick={() => removeBook(book._id)}>delete</button>
            </Col>
          </Row>
        )
      })}
    </Container>
  );
}

export default App;
