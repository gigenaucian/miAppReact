import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { Card,  Image } from 'semantic-ui-react'
import ItemCount from '../../components/ItemCount/ItemCount'

const  ProductDetail = ({match}) => {
    let prodId = match.params.id;
    const [dato ,setDato] = useState([]);

    console.log("que es", dato)
    useEffect(()=> {
        axios(`http://localhost:3000/products/${prodId}`).then((res)=> 
        setDato(res.data))
    },[prodId]);

       return (
           <div className='ProductDetail' style={{padding:50}}>
               <h1>Detalle del producto</h1>
               
                   
                   <Card key={dato.id} >
                    <Image src={dato.pictureUrl} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header> {dato.title} </Card.Header>
                      <Card.Meta>
                        <span className='date'>{dato.price}</span>
                      </Card.Meta>
                      <Card.Description>
                        {dato.detalle}
                      </Card.Description>
                      <ItemCount />
                    </Card.Content>
                   
                  </Card>
                   
 
           </div>
       )


    }
export default ProductDetail
