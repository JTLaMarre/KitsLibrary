import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Main from './pages/Main';

import BooksContextProvider from "./contexts/BooksContext";
import {Switch,  Route} from "react-router-dom";

function App() {
  
  
 
  return (
    <BooksContextProvider>
    <Switch>
    <Route exact path ='/' component={Main}/>
    </Switch>       
    </BooksContextProvider>
  );
}

export default App;
