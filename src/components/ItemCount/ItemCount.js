
import React, {useState} from 'react';
import  './ItemCount.css';
import { Button } from 'semantic-ui-react'






function ItemCount( { onAdd, producto} ) {

    const [count, setCount] = useState(0);
    const agregar = (max) => {
        count < max ? setCount(count + 1) : alert('Max. Superada');
    } 

    const quitar = () => {
        count > 0 ? setCount(count-1) : alert('Min.no posible')
      ;
    }

    return (
      
            <span className='conteiner'>
                <Button  id='cantidad' onClick={quitar}> - </Button>
                
                <input id='cantidad' value= {count} />
                <Button id='cantidad' onClick={() => agregar(producto.stock)}  > + </Button> 
                <Button onClick={() => onAdd(count)} id= 'btnCompra'> Comprar </Button>
            </span>
        
    )
}


export default ItemCount
