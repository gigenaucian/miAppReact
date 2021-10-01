import React from 'react'
import { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {  getDoc ,doc } from "firebase/firestore";
import {db} from '../../firebase'
import { Loader } from 'semantic-ui-react'


const  ItemDetailConteiner= ({ match}) => {
    const  prodId = match.params.id
    const [product, setProduct] = useState({});
    const [loading, setLoading]= useState(true)
  



    const getProducts = async () =>{
        const productoReference = doc(db, "productos", prodId)
        const productoDatos = await getDoc(productoReference)
        //console.log('product tiene productodatos', productoDatos.data())
        const aux = productoDatos.data()
        aux.id = prodId
            setProduct(aux)
           // console.log('aux tiene productodatos', aux)
        };

    
        

    useEffect(() => {
        getProducts();
        setTimeout(()=>{
            setLoading(false)
          },2000)
     }, [])


      console.log(product)


       return (
           <div className='item'>
               {loading ? <Loader active inline='centered' /> : <ItemDetail data={product}/> }
                   
            </div>
       )

}
    
export default ItemDetailConteiner;