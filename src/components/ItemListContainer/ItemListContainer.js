/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListConteiner = ({match}) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

    useEffect(()=>{
       fetch('http://localhost:3003/products').then((response)=> response.json())
       .then((respuesta)=>{
         categoryId
         ? setProducts(respuesta.filter((x)=> x.category=== categoryId))
          : setProducts(respuesta)
       }

       
        //axios(`http://localhost:3002/inventario`).then((res) => {
          //categoryId
            //? setItems(res.filter((x) => x.category === categoryId))
           // : setItems(res.data);
           // console.log("data",res.data)
            
    )},[categoryId], console.log('que tiene',categoryId))
          
          
      

     
    
   

  return(
    <div className="OTRO">
    <h1> Categoría: {categoryId}</h1>
      
    
    <ItemList products={categoryId} />
            
     
       

    </div>
    
  )
}

export default ItemListConteiner
