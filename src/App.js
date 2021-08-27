import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';


//componentes


import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

//views
import home from './Views/Home/home';

import contacto from './Views/Contacto/contacto'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';





const  App = () => {
  
  return (
    
    
    <Router>
    <div className="App">
    
      <header className="App-header">
      <NavBar />  
      </header>

      <Switch> 
        <Route path='/' exact component={ ItemListConteiner } />
        <Route  path='/item/:id' component={ItemDetailConteiner}/>
        <Route path='/category/:categoryId'  component={ ItemListConteiner   } />
        <Route path='/contacto'  component={ contacto } />

     </Switch>



       

      <Footer title="instagram" />
     
     
      
    </div>


   </Router>
    
    
  );
}

export default App ;
