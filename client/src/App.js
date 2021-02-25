import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Main from './pages/Main';
import Dvds from './pages/Dvds';
import Manga from './pages/Manga';
import Comics from './pages/Comics';
import Novels from './pages/Novels';
import BooksContextProvider from "./contexts/BooksContext";
import {Switch,  Route} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

function App() {
  
  
 
  return (
    <BooksContextProvider>
    <Navigation/>
    <Switch>
    <Route exact path ='/' component={Main}/>
    <Route  path ='/Dvds' component={Dvds}/>
    <Route  path ='/Manga' component={Manga}/>
    <Route  path ='/Comics' component={Comics}/>
    <Route  path ='/Novels' component={Novels}/>
    </Switch>       
    </BooksContextProvider>
  );
}

export default App;
