import {React, useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs,docs } from "firebase/firestore";
import {db} from '../../firebase'




const ItemListConteiner = () => {
  const [productos, setProductos] =useState([])
  const { categoryId } = useParams()


  
  
  const getProducts = async ()=>{
  const products =[]
  if(categoryId){
    const datosReference = query(collection(db, 'productos'), where('category','==', categoryId))
    const datoSnapshot = await getDocs(datosReference )
    datoSnapshot.forEach((doc)=> products.push({...doc.data(),id: doc.id})
     
  
    ); setProductos(products)

  }
  else{
   
  const datos = query(collection(db, 'productos'))
  const querySnapshot = await getDocs(datos)
  querySnapshot.forEach((doc)=> {
   products.push({...doc.data(),id: doc.id}) 

  })

  setProductos(products)
  }
  }

  useEffect(()=>{
    getProducts()
  },[categoryId])
 
  

  return(

    <div className="OTRO">
  <h1>{'*'}</h1>
   
      
      <div className='otro'> 
     
     
          
             <ItemList key={productos} product={productos} />

      </div>

    </div>
    
  )
}

export default ItemListConteiner
