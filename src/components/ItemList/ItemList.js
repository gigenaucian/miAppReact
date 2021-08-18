import React from 'react';
import './ItemList.css'
import { Card, Image } from 'semantic-ui-react';


function ItemList({ data }) {
  return(
    <Card className='cardConteiner'>
    <Image src={data.pictureUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header> {data.title} </Card.Header>
      <Card.Meta>
       {data.price}
      </Card.Meta>
      <Card.Description>
       {data.description}
      </Card.Description>
    </Card.Content>
    
  </Card>
  )
}

export default ItemList

