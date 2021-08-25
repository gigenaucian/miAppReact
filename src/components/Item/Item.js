import React from 'react';
import './Item.css'
import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner';



function Item({ data }) {
  return(
    <Link to={`/detail/${data.id}`}>
    <Card className='cardConteiner' key={data.id} id='card'>
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
  </Link>
  )
}

export default Item

