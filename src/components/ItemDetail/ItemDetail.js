import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card,  Image ,Button } from 'semantic-ui-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {  useCartContext } from '../../CartContext';



function ItemDetail({ dato, data}) {

  const { addToCart } = useCartContext()

  const[count, setCount] = useState(null)
  
  const onAdd = (count) => {(
    count > 0 ? 
  (addToCart(dato , count)) : alert("Agregar producto")
  )
  setCount(count)
  }
    
   
    return (
         
            <div className='ProductDetail' style={{padding:50}}>
                        <h1>Detalle del producto</h1>
               
                   
                   <Card key={data.id} >
                    <Image src={data.pictureUrl} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header> {data.title} </Card.Header>
                      <Card.Meta>
                        <span className='price'> {data.price}</span>
                      </Card.Meta>
                      <Card.Meta>{`STOCK: ${data.stock - count}`} </Card.Meta>
                      <Card.Description>
                        {data.detalle}
                      </Card.Description>

                      <span>
                     { count === null ? <ItemCount producto ={data} onAdd={onAdd}  />
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

export default ItemDetail; 
