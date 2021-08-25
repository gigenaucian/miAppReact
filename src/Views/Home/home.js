import React from 'react'
import ItemListConteiner from '../../components/ItemListContainer/ItemListContainer'
import ItemList from '../../components/ItemList/ItemList'

function home() {
    return (
        <div>
             <div className="CardsConteiner">
      <ItemListConteiner 
          name="Combo Felita" date="$2700" description="Confeccionado a mano, apto Horno"  stock="stock 10 unidades" img="./foto2.jpg"  /> 
      <ItemListConteiner 
          name="Combo Mate" date="$1700" description="Confeccionado a mano, sin moldes." stock="stock 10 unidades" img="./foto6.jpg" /> 
      <ItemListConteiner 
         name="Plato Felicitas" date="$900" description="Confeccionado a mano, apto Horno y microhondas" stock="stock 10 unidades" img="./header.jpg" />         
       
        </div>  
       <ItemList /> 
       
        </div>
    )
}

export default home
