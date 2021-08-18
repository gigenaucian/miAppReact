/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Card,  Image } from 'semantic-ui-react'

import ItemCount from '../ItemCount/ItemCount';

const ItemListConteiner = ({name , date , description,stock,  img} ) => (
  <Card id="cardConteiner">
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{date}</span>
      </Card.Meta>
      <Card.Description>
       {description}
      </Card.Description>
      <Card.Description>
       {stock}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <ItemCount />
    
    </Card.Content>
  </Card>
)

export default ItemListConteiner
