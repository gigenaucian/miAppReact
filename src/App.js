import React from 'react';
import './App.css';

//componentes

import "./components/NavBar";
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
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
      <Footer title="instagram" />
      <Footer title="Facebook" />
      
    </div>
  );
}

export default App;
