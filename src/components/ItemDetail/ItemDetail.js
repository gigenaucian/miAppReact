import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card,  Image ,Button } from 'semantic-ui-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {  useCartContext } from '../../CartContext';



function ItemDetail({ dato }) {

  const { addToCart } = useCartContext()

  


  const[count, setCount] = useState(null)
  
  const onAdd = (count) => {
    count > 0 ? 
   setCount((addToCart(dato, count)), count) : alert("Agregar producto")
    }
    
   
    return (
         
            <div className='ProductDetail' style={{padding:50}}>
                        <h1>Detalle del producto</h1>
               
                   
                   <Card key={dato.id} >
                    <Image src={dato.pictureUrl} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header> {dato.title} </Card.Header>
                      <Card.Meta>
                        <span className='price'> {dato.price}</span>
                      </Card.Meta>
                      <Card.Meta>{`STOCK: ${dato.stock - count}`} </Card.Meta>
                      <Card.Description>
                        {dato.detalle}
                      </Card.Description>

                      <span>
                     { count === null ? <ItemCount producto ={dato} onAdd={onAdd}  />
                     :
                     <Link to='/cart'>
                        <Button > Terminar Compra </Button>
                      </Link>
                      }
                     
                      </span>
                      
                    </Card.Content>
                   
                  </Card>
                   
 
           </div>
        
    )
}

export default ItemDetail
