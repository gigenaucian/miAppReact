import { React, useEffect, useState } from "react";
import axios from "axios";


import ItemDetail from "./ItemDetail/ItemDetail";
import { Loader } from 'semantic-ui-react'

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   // console.log("que hay aca", data);

    useEffect(() => {
        axios('../inventario.json').then((res) =>
            setData(res.data)
        );
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="ItemDetail">
            {isLoading ? <Loader active inline='centered' /> : <ItemDetail dataProduct={data} />}
        </div>
    );
};

export default ItemDetailContainer;