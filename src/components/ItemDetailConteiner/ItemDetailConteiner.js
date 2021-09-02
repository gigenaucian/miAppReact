import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'




const  ItemDetailConteiner= ({match}) => {
    let prodId = match.params.id;
    const [dato ,setDato] = useState([]);

    
    useEffect(()=> {
        axios(`http://localhost:3003/products/${prodId}`).then((res)=> 
        setDato(res.data))
    },[prodId]);


   
       return (
        
        <ItemDetail dato={dato}/>
        
       )


    }
export default ItemDetailConteiner