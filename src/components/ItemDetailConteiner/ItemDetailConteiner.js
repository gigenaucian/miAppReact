import React from 'react'
import { useState, useEffect} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'

import { getFirestore, collection, query, where, getDocs ,docs } from "firebase/firestore";
 import {db} from '../../firebase'


const  ItemDetailConteiner= ({itemId}) => {
    
    const [product, setProduct] = useState([]);
  

    useEffect(() => {

        const getProducts = async () =>{
          
            const producto = query(collection(db,"productos"))
            where('id','=', itemId)
    
            const q =(await getDocs(producto)).docs;
            setProduct(q[0].data())
            };


       getProducts();
     }, [itemId] )


       console.log(product)


       return (
           <div className='item'>

               
                   <ItemDetail data={product}/>
             
                    
            </div>
       )

       }
    
export default ItemDetailConteiner;