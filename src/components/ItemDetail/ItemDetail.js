import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card,  Image } from 'semantic-ui-react'


function ItemDetail({dato}) {
  
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

export default ItemDetail
