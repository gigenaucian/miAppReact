import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';


//componentes


import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';



//views
import home from './Views/Home/home';
import contacto from './Views/Contacto/contacto';
import productos from './Views/Productos/productos';
import ProductDetail from './Views/ProductDetail/ProductDetail';



const  App = () => {
  
  return (
    
    
    <Router>
    <div className="App">
    
      <header className="App-header">
      <NavBar />  
      </header>
      <Switch> 
        <Route path='/' exact component={ home } />
        <Route path='/contacto' component={ contacto } />
       <Route path='/productos' component={ productos } />
       <Route path ='/detail/:id' component={ ProductDetail } />
     </Switch>



       

      <Footer title="instagram" />
     
     
      
    </div>


   </Router>
    
    
  );
}

export default App ;
