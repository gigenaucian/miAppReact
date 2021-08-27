
import {React, useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';



const ItemListConteiner = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
 
  useEffect(() => {
       fetch(`http://localhost:3003/products`).then((Response)=>Response.json())
       .then((respuesta)=>{
         return(
        categoryId
        ? setProducts(respuesta.filter((x)=> x.category === categoryId))
         : setProducts(respuesta)
         )}


  )}, [categoryId], console.log('que tiene', products)) 

     
    
   

  return(

    <div className="OTRO">
    <h1>{categoryId}</h1>
   
      
      <div className='otro'> 
     
     
          
             <ItemList key={products.category} product={products}  />

      </div>
        
    
      
    
          
            
     
       

    </div>
    
  )
}

export default ItemListConteiner
