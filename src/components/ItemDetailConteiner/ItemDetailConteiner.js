import React from 'react'
import { useState, useEffect} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'

import { getFirestore, collection, query, where, getDoc ,doc } from "firebase/firestore";
 import {db} from '../../firebase'


const  ItemDetailConteiner= ({ match}) => {
   const  prodId = match.params.id
    
    const [product, setProduct] = useState({});
  



    const getProducts = async () =>{
        const productoReference = doc(db, "productos", prodId)
        const productoDatos = await getDoc(productoReference)
        console.log('product tiene productodatos', productoDatos)

       
        setProduct(productoDatos.data())
        };
        

    useEffect(() => {
        getProducts();
       
     }, [prodId] )


      console.log(product)


       return (
           <div className='item'>

               
                   <ItemDetail data={product}/>
             
                    
            </div>
       )

       }
    
export default ItemDetailConteiner;