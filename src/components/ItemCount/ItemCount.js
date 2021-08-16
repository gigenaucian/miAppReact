
import React, {useState} from 'react';
import  './ItemCount.css';
import { Button } from 'semantic-ui-react'





function ItemCount( {initial =0, stock=10 } ) {
    const [stockItems, setStockItems] = useState(initial)
    const incrementar = ()=>{
        if(stockItems < stock){
            setStockItems (stockItems + 1)
        }else{
            return false
        }
    }

    const decrementar =()=>{
        if(stockItems >0){
            setStockItems (stockItems - 1)
        }else{
            return false
        }
    }

    const comprar = () =>{
        if(stockItems >= 1){
            alert("Al carrito")
        }else{
            return false
        }


    }


    return (
        <div className="contadores">
            
            <p> { stockItems } </p>
            <Button onClick={decrementar}> - </Button>
            <Button onClick={incrementar} > + </Button>
            <Button onClick={comprar} id="btnCompra">Comprar</Button>
            
        </div>
    )
}

export default ItemCount
