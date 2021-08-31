
import React, {useState} from 'react';
import  './ItemCount.css';
import { Button } from 'semantic-ui-react'



function ItemCount( {data , stock =10,  onAdd} ) {
    const [count, setCount] = useState(0);

    const agregar = (max) => {
        count < max ? setCount(count + 1) : alert('Max. Superada');
    }

    const quitar = () => {
        count > 0 ? setCount(count-1) : alert('Min. no posible');
    }

    return (
        <>
            <span className='conteiner'>
                <Button onClick={quitar}> - </Button>
                
                <input 
                id='cantidad'
                value= {count}
                />
                <Button onClick={() => agregar(stock)} > + </Button> 
                <Button onClick={() => onAdd(count)} id= 'btnCompra'> Comprar </Button>
            </span>
        </>
    )
}


export default ItemCount
