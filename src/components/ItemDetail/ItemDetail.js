import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card,  Image ,Button , Grid} from 'semantic-ui-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {  useCartContext } from '../../CartContext';



function ItemDetail({ data }) {

  const { addToCart } = useCartContext()

  const[count, setCount] = useState(null)
  
  const onAdd = (count) => {(
    count > 0 ? 
  (addToCart(data , count)) : alert("Agregar producto")
  )
  setCount(count)
  }
    
   
    return (
         
            <div className='ProductDetail' style={{padding:100}}>
                        <h1>Detalle del producto</h1>


    <Grid key={data.id}>
    <Grid.Column width={4}>
    <Image src={data.pictureUrl} />
    </Grid.Column>
    <Grid.Column width={8}>
    {data.title} -
    {data.detalle}-
    </Grid.Column>
    <Grid.Column width={3}> Valor:
    <span> $ {data.price} </span>
    </Grid.Column>
    <Grid.Column width={3}>
    {`STOCK: ${data.stock - count}`}
    </Grid.Column>
    </Grid>
               
                   
                  

                     
       { count === null ? <ItemCount producto ={data} onAdd={onAdd}  />
                     :
        <Link to='/cart'>
        <Button > Terminar Compra </Button>
         </Link>  }
          
     </div>
        
    )
}

export default ItemDetail; 
