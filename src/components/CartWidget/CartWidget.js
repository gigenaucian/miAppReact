import React from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../CartContext';


const CartWidget = () => {
    const {cart} =useCartContext()
   
    const itemsTotal = cart.reduce((accumulador, dato)=>{
            return accumulador + dato.quantity
    },0)



    return (
        <div className='icono'>
            <FontAwesomeIcon class='icono' icon={faCartPlus}  />
            {itemsTotal}
        </div>
    )
};

export default CartWidget
