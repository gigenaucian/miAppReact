/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Card,  Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const ItemListConteiner = ({name , date , description, img} ) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{date}</span>
      </Card.Meta>
      <Card.Description>
       {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button>Comprar</Button>
    </Card.Content>
  </Card>
)

export default ItemListConteiner
