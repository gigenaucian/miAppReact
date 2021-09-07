import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';


//componentes


import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

//views
import macetas from './Views/Contacto/macetas'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import cart from './Views/Cart/cart.js'
import { CartProvider } from './CartContext';

//importo el provider y envolver 



const  App = () => {
  
  return (
    <CartProvider>
  
    <Router>
    <div className="App">
    
      <header className="App-header">
      <NavBar />  
      </header>

      <Switch> 
        <Route path='/' exact component={ ItemListConteiner } />
        <Route path='/category/:categoryId'  component={ ItemListConteiner } />
        <Route  path='/item/:id' component={ItemDetailConteiner}/>
        <Route path='/macetas'  component={ macetas } />
        <Route path='/cart'  component={ cart } />

     </Switch>



       

      <Footer title="instagram" />
      
    </div>


   </Router>

   </CartProvider>
  );
}

export default App ;
