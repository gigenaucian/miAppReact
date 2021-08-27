
import React, {useState , useEffect} from 'react';
import Item from '../Item/Item';
import './ItemList.css'


//spinner
import { Loader } from 'semantic-ui-react'


const ItemList = () => {
    const [inventario, SetInventario] =  useState([])
    const [IsLoading, setIsLoading] = useState(true);
     useEffect(() => {
        fetch('http://localhost:3003/products')
        .then((response) => response.json())
        .then((datos) => SetInventario(datos))
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[])

    if (IsLoading) {
        return (<Loader active inline='centered' />)

    } else {
        return (
        <div className='OtrosProductos' id="otros">
            {inventario.map((data)=> {
               
            return (
                

               <Item key={data.id} data= {data} />
              
            );
            
            })}


            
        </div>
    )}
}

export default ItemList

