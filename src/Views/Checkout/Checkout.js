import React from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '@firebase/firestore';
import {  collection, Timestamp, addDoc } from "firebase/firestore";
import {  useCartContext } from '../../CartContext';
import './Checkout.css'
import { db } from '../../firebase'
import ModalExit from '../../components/Modal/ModalExit'
import { Formik, Form, Field, ErrorMessage } from 'formik'



const Checkout = () => {

  const {cart, cartPrice,updateItemStock, cleanCart} = useCartContext()
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
            name: data_usuario.nombre,
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
       <Formik
                initialValues={{
                    name: '',
                    email: '',
                    emailx2: ''
                }}

                validate={(values) => {
                    let error = {}

                    // Validacion nombre
                    if (!values.name) {
                        error.name = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        error.name = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion correo
                    if (!values.email) {
                        error.email = 'Por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        error.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    // Validacion verifcorreo
                    if (!values.emailx2) {
                        error.emailx2= 'Por favor repite el correo electronico'
                    } else if (values.emailx2 !== values.email) {
                        error.mailReingreso = 'Los correo electronicos deben coincidir'
                    }

                    return error
                }}

                onSubmit={(values, { resetForm }) => {
                   // (values.name, values.email)
                    cart.map((prd) => {
                        return updateItemStock(prd.id, prd.stock - prd.quantity)
                    })
                    cleanCart()
                }}
            >
                {({ }) => (
                    <Form className="formulario">
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <Field
                                type="text"
                                id='name'
                                name='name'
                                placeholder='Ingrese su nombre completo..'
                                
                            />
                            <ErrorMessage name='name' component={() => (
                                <div className='error' style={{color:'red'}}> {errors.name} </div>
                            )} />
                        </div>
                        
                        <div>
                            <label htmlFor="mail">Correo</label>
                            <Field
                                type="email"
                                id='mail'
                                name='mail'
                                placeholder='mail@mail.com'
                            />
                            <ErrorMessage name='mail' component={() => (
                                <div className='error'> {errors.email} </div>
                            )} />
                        </div>
                        <div>
                            <label htmlFor="emailx2">Repetir Correo</label>
                            <Field
                                type="emailx2"
                                id='mailVerif'
                                name='emailx2'
                                placeholder='mail@mail.com'
                            />
                            <ErrorMessage name='emailx2' component={() => (
                                <div className='error'> {errors.emailx2} </div>
                            )} />
                        </div> 
                    </Form>
                )}
                
            </Formik>
            < ModalExit onSubmit={handleSubmitForm}/>
        
        
    </div>
</section>

  )
}

export default Checkout;