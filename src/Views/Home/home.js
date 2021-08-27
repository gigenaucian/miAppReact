import React from 'react'
import ItemListConteiner from '../../components/ItemListContainer/ItemListContainer'

import {Link} from 'react-router-dom'

function home() {
    return (
         

        <div className="CardsConteiner">
            
                
            <Link to='/item/:id'>
                 <ItemListConteiner /> 
            </Link>
            
        </div>
        
    )
}

export default home
