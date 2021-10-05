import React from 'react';
import {  useCartContext } from '../../CartContext';
import { Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './cart.css'
import { Table } from 'reactstrap';


const Cart = () => {

    const {cart, cartPrice, clear, deleteItem } =useCartContext() ;
    const precioTotal = cartPrice();
    console.log(cart)
    return (
        <section className="cart" style={{height:"700px"}}>
                
            <h1 style={{padding:"100px"}}>Tu carrito</h1>
            
                <div>
                     {cart.length === 0 ?
                    (<div>
                        <p>Tu Carrito esta vacio</p>
                        <Link to='/'>
                            <button button className='button' style={{width:'500px'},{display:'inline-block'}}> Empezar a comprar</button>
                        </Link></div>)
                        : 
                        (
                    <div>   
                        <Table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Total</th>
                                <th>#</th>
                                </tr>
                            </thead>  
                            <tfoot>
                    <tr>
                        <td colspan="3" align="right" id="cart_total">
                          El total de tu compra es:   
                          $ {precioTotal}
                        </td>
                    </tr>
                </tfoot> 
                    { 
                        cart.map((data)=> (

                            <tbody  key={data.id}>
                                <tr>
                                <th scope="row">{data.id}</th>
                                <td>{data.title}</td>
                                <td>{data.quantity}</td>
                                <td> {data.price}</td>
                                <td>$ {data.price * data.quantity}</td>
                                <td><Icon name ="trash alternative" onClick={() => deleteItem(data.id)} style={{margin: "10px 50px 10px 50px" }} /> </td>
                                </tr>
                                
                            </tbody>
                        )) }
                           
                         </Table>
                
                <div className="final">
                <button className='button' onClick={() => clear()}>Vaciar carrito</button>
                    
                    <Link to="/Checkout">
                      <button className='button' >  Finalizar compra </button>
                    </Link>
                </div> 
                    </div>
                    )}
                 
                 </div>
                    </section>
                ) 
                
            
        
    
}

export default Cart;