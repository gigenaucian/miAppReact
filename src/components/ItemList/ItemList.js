
import React, {useState , useEffect} from 'react';
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = () => {
    const [inventario, SetInventario] =  useState([])
    


    useEffect(() => {
        fetch('../inventario.json')
        .then((response) => response.json())
        .then((datos) => SetInventario(datos))
        
    },[])

    
    
    return (
        <div className='OtrosProductos' id="otros">
            {inventario.map((data)=> {
            return (
               <Item key={data.id} data= {data} />
            );
            
            })}


            
        </div>
    )
}

export default ItemList

