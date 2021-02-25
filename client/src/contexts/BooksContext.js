import React,{createContext,useState} from 'react';


export const  BooksContext = createContext();

const BooksContextProvider = (props) => {
    
    const[books, setBooks]=useState([])

  

    return(
        <BooksContext.Provider value={{books,setBooks}}>

        {props.children}

        </BooksContext.Provider>
     )

}

export default BooksContextProvider