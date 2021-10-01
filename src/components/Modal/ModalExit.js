import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {  useCartContext } from '../../CartContext';

const  ModalExit = ()=>{
  const {cart } = useCartContext()
  const [Open, setOpen] = useState (false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={Open}
      size='small'
      trigger={<Button>Finalizar compra</Button>}
    >
      <Header icon>
        Tu compra fue realizada con Exito
      </Header>
      <Modal.Content>
        <p>
          Tu orden de seguimiento es:  {cart.map(e=> { return e.id} )}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='pink' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Aceptar
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExit
