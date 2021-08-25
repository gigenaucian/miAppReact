import React, {  useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'


import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailConteiner.css"

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    


    useEffect(() => {
        axios('../inventario.json').then((res) =>
            setData(res.data)
        ); 
       
    }, []);

    return (
        <div className="ItemDetailConteiner">
           {data.map((dato)=>{
               return(
                   <div key={dato.id} className="ItemDetailConteiner">
                   <Link to={`/detail/${dato.id}`}>
                       <ItemDetail data ={dato} />
                    </Link>
                   </div>
               )
           })}
        </div>
    );
};

export default ItemDetailContainer;