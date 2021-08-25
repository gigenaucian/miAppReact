import React from 'react';
import './productos.css'
import ItemDetailContainer from '../../components/ItemDetailConteiner/ItemDetailConteiner';




const productos = () => {
    return (
        <div className="productos">
           <h1>Productos</h1>
           <ItemDetailContainer />
        
        </div>
    )
}

export default productos
