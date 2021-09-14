import {React, useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"

import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../firebase'




const ItemListConteiner = () => {
  const [productos, setProductos] =useState([])
 

  const getProducts = async ()=>{
  const products =[]

  const datos = query(collection(db, 'productos'))
  const querySnapshot = await getDocs(datos)
  querySnapshot.forEach((doc)=> {
   products.push({...doc.data(),id: doc.id}) 
  // console.log(products)
  })

  setProductos(products)
}

  useEffect(()=>{
    console.log('adentro del useffect')
    getProducts()
  },[])
 
   

  return(

    <div className="OTRO">
  <h1>{productos.id}</h1>
   
      
      <div className='otro'> 
     
     
          
             <ItemList key={productos} product={productos}  />

      </div>

    </div>
    
  )
}

export default ItemListConteiner
