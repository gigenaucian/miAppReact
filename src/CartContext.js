
import React, { useContext , useState , createContext} from "react"

export const CartContext = createContext()
export const useCartContext =() =>useContext(CartContext)

const getLocalStorage = () => {
	if (JSON.parse(localStorage.getItem('cart'))) {
		return JSON.parse(localStorage.getItem('cart'))
	} else{
		return []
	}
}


export const CartProvider = ({children}) =>{
    const [cart, setCart ] = useState (getLocalStorage());
    
    const setLocalStorage = () => {
        let x = JSON.stringify(cart)
        console.log ('cart', cart)
        console.log('x', x)
		localStorage.setItem('cart', x)
	}



    const isInCart = (id) =>cart.some((dato)=>dato.id ===id) //me devuelve true/false

   
    const addToCart =(dato, quantity) =>{
        if(isInCart(dato.id)){
            const nuevoCart =cart.map((cartElement)=>{
                if (cartElement.id === dato.id){
                    return {...cartElement, quantity: cartElement.quantity + quantity}
                }else return cartElement
                
            })
            setCart(nuevoCart)
            console.log('dentro del if', cart)
             
        }else{
            setCart((antes)=> [...antes,{...dato,quantity}])
            console.log('dentro del if', cart)
            }
            
        console.log('despues del if', cart)
        setLocalStorage(cart)  
    }


    const deleteItem = (itemId) => {
        
        setCart(cart.filter((item) => item.id !== itemId));
        cart.length === 1 && localStorage.clear()
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
        <CartContext.Provider value= {{cart,setCart,setLocalStorage, addToCart, deleteItem, clear, cartPrice, itemsTotal, isInCart }}>
                {children}
        </CartContext.Provider>
    )
}