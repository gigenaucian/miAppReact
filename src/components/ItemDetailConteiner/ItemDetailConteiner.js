import React from 'react'
import { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {  getDoc ,doc } from "firebase/firestore";
import {db} from '../../firebase'
import PaginaError from '../../Views/PaginaError'


const  ItemDetailConteiner= ({ match}) => {
    const  prodId = match.params.id
    const [product, setProduct] = useState({});
    const [notFound, setNotFound]= useState(false)



    const getProducts = async () =>{
        const productoReference = doc(db, "productos", prodId)
        const productoDatos = await getDoc(productoReference)
        const aux = productoDatos.data()
      

       if(!aux){
          setNotFound(true)
       }else {aux.id = prodId
        setNotFound (false)
         setProduct(aux) }
        

        };

    useEffect(() => {
        getProducts();
        
     }, [])


       return ( 
           <div className='item'>
               {notFound ? <PaginaError /> : <ItemDetail data={product}/> }
                   
            </div>
       )
       }
    
export default ItemDetailConteiner;