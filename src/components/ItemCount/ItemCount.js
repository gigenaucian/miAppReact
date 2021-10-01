
import React, {useState } from 'react';
import  './ItemCount.css';
import { Button } from 'semantic-ui-react'






function ItemCount( { stock =10,  onAdd, producto} ) {




    const [count, setCount] = useState(0);

    const agregar = (max) => {
        count < max ? setCount(count + 1) : alert('Max. Superada');
    } 

    const quitar = () => {
        count > 0 ? setCount(count-1) : <alert class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </alert>;
    }

    return (
        <>
            <span className='conteiner'>
                <Button onClick={quitar}> - </Button>
                
                <input id='cantidad' value= {count} />
                <Button onClick={() => agregar(stock)} > + </Button> 
                <Button onClick={() => onAdd(count)} id= 'btnCompra'> Comprar </Button>
            </span>
        </>
    )
}


export default ItemCount
