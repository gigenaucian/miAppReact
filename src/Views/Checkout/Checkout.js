import React from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '@firebase/firestore';
import {  collection, Timestamp, addDoc } from "firebase/firestore";
import {  useCartContext } from '../../CartContext';
import './Checkout.css'
import { db } from '../../firebase'
import ModalExit from '../../components/Modal/ModalExit'



const Checkout = () => {

  const {cart, cartPrice} = useCartContext()
  const [data_usuario, setData_usuario] = useState([])
  const precioTotal = cartPrice();
  const [hayOrden, setHayorden] = useState('')
  const orders = collection(db ,'orders')
  


  const handleChange = (e) => {
    setData_usuario({ ...data_usuario,
        [e.target.name]: e.target.value
    })
 }
 const handleSubmitForm = async (e) => {
    e.preventDefault();
    const nuevaOrder={
        buyer:{
            nombre: data_usuario.nombre,
            apellido:data_usuario.apellido,
            email: data_usuario.email,
            emailx2: data_usuario.emailx2
        },
        items: cart,
        date: Timestamp.now(),
        total: precioTotal
        
    }
    const docRef = await addDoc((orders), nuevaOrder)
    setHayorden(docRef.id)
}
   

  return (
    
      <section className="checkout" key={cart.id}>
          <div className={`compraFinalizada ${hayOrden ? 'show' : 'hide'}`}>
                    <h1>Gracias por tu compra</h1>
                    <Link to="/"><button >Inicio</button></Link>
               
            </div>
        <div className={`container ${hayOrden ? 'hide' : 'show'}`}>
        <h1>Checkout</h1>
       { cart.map(item => {return  (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p> ${item.price} x {item.quantity}</p>
                        
                        <p>Codigo: {item.id} </p> 
                        
                     </div> 
                    
                     )})
       }
       
       <h2>Total: $ {precioTotal} </h2>
        <form method='POST' onSubmit={handleSubmitForm} >
            <input onKeyUp={handleChange} onBlur={handleChange} type="text" name="nombre" placeholder="Nombre" />
            <input onKeyUp={handleChange} onBlur={handleChange} type="text" name="apellido" placeholder="Apellido" />
            <input onKeyUp={handleChange} onBlur={handleChange} type="email" name="email" placeholder="E-mail" required />
            <input onKeyUp={handleChange} onBlur={handleChange} type="email" name="emailx2" placeholder="Reingrese su E-mail" required />
            < ModalExit onSubmit={handleSubmitForm}/>
            {/* <button onSubmit={handleSubmitForm} >Pagar</button> */}
        </form>
       
            
        
    </div>
</section>

  )
}

export default Checkout;