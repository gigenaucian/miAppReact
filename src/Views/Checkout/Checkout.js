import React from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '@firebase/firestore';
import {  collection, Timestamp, addDoc, doc, updateDoc,increment } from "firebase/firestore";
import {  useCartContext } from '../../CartContext';
import './Checkout.css'
import { db } from '../../firebase'
import { Formik, Form, Field, ErrorMessage } from 'formik'



const Checkout = () => {
  const {cart, cartPrice, clear} = useCartContext()
  const [data_usuario, setData_usuario] = useState([])
  const precioTotal = cartPrice();
  const [hayOrden, setHayorden] = useState('')
  const orders = collection(db ,'orders')

  const handleChange = (e) => {
    setData_usuario({ ...data_usuario,
        [e.target.name]: e.target.value
    })
 }
  

 const handleSubmitForm = async (ordenInfo) => {
  //  e.preventDefault();
    const nuevaOrder={
        buyer:{
            name: ordenInfo.name,
            email: ordenInfo.email,
            emailx2: ordenInfo.emailx2
        },
        items: cart,
        date: Timestamp.now(),
        total: precioTotal
        
    }
    const docRef = await addDoc((orders), nuevaOrder)
    return docRef.id

}


const updateStock =  () => {
    cart.forEach(element => {
        const elementRef = doc(db,"productos", element.id)
        updateDoc(elementRef, {'stock': increment((element.quantity)*-1) })
    });


}
   
  return (
    
      <section className="checkout" key={cart.id} style={{height:"900px"}}>
            <div className={`compraFinalizada ${hayOrden ? 'show' : 'hide'}`}>
                    <h1>Gracias por tu compra.</h1>
                    <p>Tu numero de orden es: {hayOrden}</p>
                    <p>Verifica tu e-mail {data_usuario.email}</p>
                    <Link to="/"><button > Volver a Inicio</button></Link>
               
            </div>
        <div className={`container ${hayOrden ? 'hide' : 'show'}`}>
        <h1 style={{fontSize:'60px'}}>Checkout</h1>
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
                     } else
                   // Validacion correo
                    if (!values.email) {
                        error.email= 'Por favor el correo electronico'
                     }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                         error.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }
                    // Validacion verifcorreo
                    if (!values.emailx2) {
                         error.emailx2= 'Por favor repite el correo electronico'
                     } else if (values.emailx2 !== values.email) {
                         error.emailx2 = 'Los correo electronicos deben coincidir'
                     }

                    return error
                }}

                onSubmit={async (values) => {
                   let orderId = await handleSubmitForm(values)
                   updateStock()
                   clear()
                   setHayorden(orderId)
                }}
            >
                {({ errors }) => (
                    <Form className="formulario">
                        <div className="form">
                            
                            <Field
                                type="text"
                                id='name'
                                name='name'
                                onKeyUp={handleChange} 
                                onBlur={handleChange}
                                placeholder='Ingrese su nombre completo..'
                                
                            />
                            <ErrorMessage name='name' component={() => (
                                <div className='error' style={{color:'red'}}> {errors.name} </div>
                            )} />
                        </div>
                        
                        <div>
                            
                            <Field
                                type="email"
                                id='email'
                                name='email'
                                onKeyUp={handleChange}
                                 onBlur={handleChange}
                                placeholder='mail@mail.com'
                            />
                            <ErrorMessage name='email' component={() => (
                                <div className='error' style={{color:'red'}}> {errors.email} </div>
                            )} />
                        </div>
                        <div>
                            
                            <Field
                                type="emailx2"
                                id='emailx2'
                                name='emailx2'
                                onKeyUp={handleChange} 
                                onBlur={handleChange}
                                placeholder=' Repite tu correo mail@mail.com'
                            />
                            <ErrorMessage name='emailx2' component={() => (
                                <div className='error'  style={{color:'red'}}> {errors.emailx2} </div>
                            )} />
                        </div> 
                        
                        <button  type="submitForm" style={{width:'1300px'},{backgroundColor:'grey'}}>Submit</button>
                         
                    </Form>
                )}
            </Formik>
    </div>
</section>
  )
}

export default Checkout;