import React  from 'react';
import {  useCartContext } from '../../CartContext';

import {Link} from 'react-router-dom';


const Cart = () => {

    const {cart, cartPrice, clear, deleteItem} =useCartContext() ;

    const precioTotal = cartPrice();

    return (
        <section className="cart">
            <h1>Cart</h1>
            
            <ul>
                {
                    cart.map(data=> (
                        <li key={data.id}>
                            <img src={data.pictureUrl} alt=""/>
                            <div>
                            <h2>{data.title}</h2>
                            
                                <p>Cantidad: {data.quantity}</p>
                                <p>Precio por unidad: <strong>${data.price}</strong></p>
                                <p>Precio total: <strong>${data.price * data.quantity}</strong></p>
                                <button onClick={() => deleteItem(data.id)}>Eliminar producto</button>
                            </div>
                        </li>
                    ))
                }
             <button style={{padding: "10px 50px 10px 50px" }} onClick={() => clear()}>Vaciar carrito</button>
            </ul>
            <div className="final">
                <p>Precio total: ${precioTotal} </p>
                <Link to="">Finalizar compra</Link>
            </div>
        </section>
    )
}

export default Cart;