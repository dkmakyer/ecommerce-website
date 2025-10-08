import {useState, createContext} from 'react'

export const CartContext = createContext(); 

export const CartProvider = ({children}) => {
    const [cartState, setCartState] = useState([]);
    const addToCart = (item) => {
        setCartState((prev) => [...prev, item])
    }
    const removeFromCart = (title) => {
        setCartState((prev) => prev.filter(item => item.title !== title));
    }

    return (
    <>
        <CartContext.Provider value={{cartState, addToCart, removeFromCart}}>
        {children}
        </CartContext.Provider>
    </>
    )
}

