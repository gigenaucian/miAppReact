
import React, { useContext , useState , createContext} from "react"



export const CartContext = createContext()
export const useCartContext =() =>useContext(CartContext)




export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState ([]);
    



    const isInCart = (id) =>cart.some((dato)=>dato.id ===id) //me devuelve true/false

    const addToCart =(dato, quantity) =>{
        if(isInCart(dato.id)){
            const nuevoCart =cart.map((cartElement)=>{
                if (cartElement.id === dato.id){
                    return {...cartElement, quantity: cartElement.quantity + quantity}
                }else return cartElement
                
            })
            setCart(nuevoCart)
        }else{
            setCart((antes)=> [...antes,{...dato,quantity}])
        }
    }


    const deleteItem = (itemId) => {
        
        setCart(cart.filter((item) => item.id !== itemId));
      };


    const clear=()=>{
        setCart([])
        
    }
    const itemsTotal =()=>{ cart.reduce((accumulador, dato)=>{
        return accumulador + dato.quantity
        },0)}


    const cartPrice = () => {
        return cart.reduce((accumulator, dato) => 
        { return Number(accumulator + dato.quantity * dato.price)}, 0);
    }

    return (
        <CartContext.Provider value= {{cart,setCart, addToCart, deleteItem, clear, cartPrice, itemsTotal, isInCart }}>
                {children}
        </CartContext.Provider>
    )
}