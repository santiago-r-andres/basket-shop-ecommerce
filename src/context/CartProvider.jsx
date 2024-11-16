import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((cartItem) => cartItem.id === item.id)

            if (index !== -1) {
                const updatedCart = prevCart.map((cartItem, idx) =>
                    idx === index ? { ...cartItem, qty: cartItem.qty + item.qty } : cartItem
                )
                return updatedCart
            } else {
                return [...prevCart, { ...item, qty: item.qty || 1 }]
            }
        })
    }


    const getQty = () => {
        const qtyOnly = cart.map(item => item.qty)
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    const deleteFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }

    const clearCart = () => setCart([])

    const getTotal = () => {
        const priceOnly = cart.map(item => item.price * item.qty)
        const total = priceOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, getQty, clearCart, deleteFromCart, getTotal }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider