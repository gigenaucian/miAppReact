import React from 'react';
import { useState } from 'react'
import firebase from 'firebase/app';
import '@firebase/firestore';
import { getFirestore, collection, query, where, getDocs,docs, Timestamp, addDoc } from "firebase/firestore";
import {  useCartContext } from '../../CartContext';
import './Checkout.css'
import { db } from '../../firebase'



const Checkout = () => {
  //const db = getFirestore();
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
            email: data_usuario.email
        },
        items: cart,
        date: Timestamp.now(),
        total: precioTotal
        
    }
    
    const docRef = await addDoc((orders), nuevaOrder)
    setHayorden(docRef.id)
    //.then(({id}) => setOrderId(id))
    //.catch(error => console.log(error))
    console.log('documento :', docRef)
    console.log('documento :', docRef.id)
}
   

  return (
    
      <section className="checkout" key={cart.id}>
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
            <input onKeyUp={handleChange} onBlur={handleChange} type="email" name="email" placeholder="E-mail" />
          
            <button onSubmit={handleSubmitForm} >Pagar</button>
        </form>
       
            <div className={`compraFinalizada ${hayOrden ? 'show' : 'hide'}`}>
                <h2>¡Compra exitosa!</h2>
                <p>Este es tu numero de seguimiento: {hayOrden}</p>
            </div>
        
    </div>
</section>

  )
}

export default Checkout;