import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import {  useCartContext } from "../CartContext"






const Formulario = () => {
    const { newOrder, lastOrder, cart, updateItemStock, cleanCart } = useCartContext()
   
    return (
        <div className='form-container'>
            <Formik
                initialValues={{
                    name: '',
                    mail: '',
                    mailVerif: ''
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
                    if (!values.mail) {
                        error.mail = 'Por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)) {
                        error.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    // Validacion verifcorreo
                    if (!values.mailReingreso) {
                        error.mailReingreso = 'Por favor repite el correo electronico'
                    } else if (values.mailReingreso !== values.mail) {
                        error.mailReingreso = 'Los correo electronicos deben coincidir'
                    }

                    return error
                }}

                onSubmit={(values, { resetForm }) => {
                    newOrder(values.name, values.mail)
                    cart.map((prd) => {
                        return updateItemStock(prd.id, prd.stock - prd.quantity)
                    })
                    lastOrder()

                    cleanCart()
                }}
            >
                {({ errors }) => (
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
                                <div className='error'> {errors.mail} </div>
                            )} />
                        </div>
                        <div>
                            <label htmlFor="mailVerif">Repetir Correo</label>
                            <Field
                                type="email"
                                id='mailVerif'
                                name='mailVerif'
                                placeholder='mail@mail.com'
                            />
                            <ErrorMessage name='mailVerif' component={() => (
                                <div className='error'> {errors.mailReingreso} </div>
                            )} />
                        </div> 
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario
