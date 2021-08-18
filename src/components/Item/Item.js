
import React, {useState , useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

import './Item.css'




const Item = () => {
    const [inventario, SetInventario] =  useState([])
    console.log("usuarios", inventario)


    useEffect(() => {
        fetch('../inventario.json')
        .then((response) => response.json())
        .then((datos) => SetInventario(datos))
        
    }, [])

    
    
    return (
        <div className='OtrosProductos' id="otros">
            {inventario.map((data)=> {
            return (
               <ItemList key={data.id} data= {data} />
            );
            
            })}


            
        </div>
    )
}

export default Item

