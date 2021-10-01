import React from 'react'
import { Icon } from 'semantic-ui-react'

function PaginaError() {
    return (
        <div className="Error404" style={{height:"700px"}}>
            <h1 className='error' style={{padding:"100px"}}> Error 404 </h1>
            
            
            <Icon.Group size='huge'>
                <Icon name='puzzle' />
                <Icon corner name='add' />
            </Icon.Group>
            <p style={{padding:"80px"}}>Producto No encontrado</p> 
            
        </div>
    )
}

export default PaginaError
