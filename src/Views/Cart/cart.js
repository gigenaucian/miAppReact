import React  from 'react';
import {  CartContext, useCartContext } from '../../CartContext';
import { Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './cart.css'



const Cart = () => {

    const {cart, cartPrice, clear, deleteItem } =useCartContext() ;
    
    const precioTotal = cartPrice();
    
    return (
        <section className="cart">
                
            <h1>Carrito de Compras</h1>
            
                <div>
                     {cart ===0 ?
                    (<div>
                        <p>Tu Carrito esta vacio</p>
                        <Link to='/'>
                            <button style={{padding: "10px 50px 10px 50px" }}> Empezar a comprar</button>
                        </Link></div>)
                        : 
                        (
                  
                    <div>        
                    <ul>
                    {
                        cart.map(data=> (
                            <li key={data.id}>
                                <img src={data.pictureUrl} alt="" style={{margin: "10px"},{width:"10%"}}/>
                                <div>
                                <h2>{data.title}</h2>
                                
                                    <p>Cantidad: {data.quantity}</p>
                                    <p>Precio por unidad: <strong>${data.price}</strong></p>
                                    <p>Precio total: <strong>${data.price * data.quantity}</strong></p>
                                    
                                    <Icon name ="trash alternative" onClick={() => deleteItem(data.id)} style={{margin: "10px 50px 10px 50px" }} /> 
                                </div>
                            </li>
                        ))
                    }
                 <button style={{padding: "10px 50px 10px 50px" }} onClick={() => clear()}>Vaciar carrito</button>
                </ul>
                
                <div className="final">
                    <p>Precio total: ${precioTotal} </p>
                    <Link to="/">
                      <button style={{padding: "10px 50px 10px 50px" }}>  Finalizar compra </button>
                    </Link>
                </div> 

                    


                    
                    </div>
                    )}
                 
                 </div>
                    </section>
                ) 
                
            
        
    
}

export default Cart;