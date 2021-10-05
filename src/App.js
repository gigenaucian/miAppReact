import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';


//componentes
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import PaginaError from './Views/PaginaError';

//views
import macetas from './Views/Contacto/contacto'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import cart from './Views/Cart/cart.js'
//importo el provider y envolver 
import { CartProvider } from './CartContext';
import Checkout from './Views/Checkout/Checkout';
import contacto from './Views/Contacto/contacto';





const  App = () => {
  
  return (
    <CartProvider>
    <Router>
      <div className="App">
      <NavBar />  
        

      <Switch> 
        <Route path='/' exact component={ ItemListConteiner } />
        <Route path='/category/:categoryId'  component={ ItemListConteiner } />
        <Route path='/item/:id' component={ItemDetailConteiner}/>
        <Route path='/macetas'  component={ macetas } />
        <Route path='/contacto'  component={ contacto } />
        <Route path='/cart'  component={ cart } />
        <Route path ='/Checkout' component ={ Checkout } />
        <Route path ='*'  component ={ PaginaError } />

      </Switch>



       

      <Footer title="instagram"/>
      
    </div>


   </Router>

   </CartProvider>
  );
}

export default App ;
