
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({product}) => {

 
        return (
        <div className='OtrosProductos' id="otros">
            {product.map((data)=> {
               
            return (
                

               <Item key={data.id} data= {data} />
              
            );
            
            })}


            
        </div>
    )
}


export default ItemList

