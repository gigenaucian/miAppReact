import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';


//componentes


import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';


//views
import home from './Views/Home/home';
import contacto from './Views/Contacto/contacto';
import productos from './Views/Productos/productos';






const  App = () => {
  
  return (
    
    
    <Router>
    <div className="App">
    <Switch> 
        <Route path='/' exact component={ home } />
        <Route path='/contacto' component={ contacto } />
        <Route path='/productos' component={ productos } />
      </Switch>
      <header className="App-header">
      
      <NavBar />  

      </header>
      
      
     
    




      <div className="CardsConteiner">
      <ItemListConteiner 
          name="Combo Felita" date="$2700" description="Confeccionado a mano, apto Horno"  stock="stock 10 unidades" img="./foto2.jpg"  /> 
      <ItemListConteiner 
          name="Combo Mate" date="$1700" description="Confeccionado a mano, sin moldes." stock="stock 10 unidades" img="./foto6.jpg" /> 
      <ItemListConteiner 
         name="Plato Felicitas" date="$900" description="Confeccionado a mano, apto Horno y microhondas" stock="stock 10 unidades" img="./header.jpg" />         
       
        </div>  
       <ItemList /> 
       
       

      <Footer title="instagram" />
     
      
      
    </div>
   </Router>
    
    
  );
}

export default App ;
