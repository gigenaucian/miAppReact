
import React, {useState , useEffect} from 'react';
import Item from '../Item/Item';
import './ItemList.css'
//spinner
import { Loader } from 'semantic-ui-react'


const ItemList = () => {
    const [inventario, SetInventario] =  useState([])
    const [IsLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('../inventario.json')
        .then((response) => response.json())
        .then((datos) => SetInventario(datos))
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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

