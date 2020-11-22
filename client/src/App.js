import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function App() {

const [books , setBooks] = useState([])

useEffect( async ()=>{
  const res = await axios.get('/api/book')
  .then((res=>{

    console.log(res)
    setBooks(res.data)
  }))
})

  return (
    <div className="App">
      {books.map((book)=>{
        return( <p>{book.Title} {book.Author} {book.BookType}</p>)
      })}
    </div>
  );
}

export default App;
