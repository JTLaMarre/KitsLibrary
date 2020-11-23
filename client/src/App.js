import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

const [books , setBooks] = useState([])

useEffect( ()=>{
  handleBooks();
},[])

const handleBooks = async ()=>{
  const res = await axios.get('/api/book')
  .then((res=>{

    console.log(res.data)
    setBooks(res.data)
  }))
}

const removeBook = (id)=>{
  console.log(`Remove:${id}`)
  axios({
    method:'delete',
    url:'/api/book/'+id
  })
  console.log('Removed!!')
  handleBooks();
}


  return (
    <Container>
    
      {books.map((book)=>{
          return(
          <Row>
          <Col>
           <p>{book.Title} {book.Author} {book.BookType}</p>
          </Col>
          <Col>
            <button onClick={()=>removeBook(book._id)}>delete</button>
          </Col>
          </Row>
        )
      })}
    </Container>
  );
}

export default App;
