import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'


import ItemDetail from '../ItemDetail/ItemDetail'



const  ItemDetailConteiner= ({match}) => {
    let prodId = match.params.id;
    const [dato ,setDato] = useState([]);

    console.log("que es", dato)
    useEffect(()=> {
        axios(`http://localhost:3002/products/${prodId}`).then((res)=> 
        setDato(res.data))
    },[prodId]);


    console.log("desde conteiner",dato)
       return (
        
        <ItemDetail dato={dato}/>
          
       )


    }
export default ItemDetailConteiner