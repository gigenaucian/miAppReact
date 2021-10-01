import {React, useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import {db} from '../../firebase'
import { Loader } from 'semantic-ui-react'




const ItemListConteiner = () => {
  const [productos, setProductos] =useState([])
  const { categoryId } = useParams()
  const [loading , setLoading] = useState(true)


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
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[categoryId])
 
  

  return(

  <div className="OTRO">
  <h1>{categoryId}</h1>
   
      
      <div className='otro'> 
              {loading ?  <Loader active inline='centered' /> :  <ItemList key={productos} product={productos} /> }
            

      </div>

    </div>
    
  )
}

export default ItemListConteiner
