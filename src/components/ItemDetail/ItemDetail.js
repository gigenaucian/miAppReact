import React from 'react';
import { Card,  Image } from 'semantic-ui-react'
import './ItemDetail.css'




function ItemDetail({ data }) {
  
    return (
    <div className='itemdatail'>
    <Card>
    <Image src={data.pictureUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.price}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
   
  </Card>
        </div>
    )
}

export default ItemDetail
