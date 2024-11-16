import { useState, useEffect, useContext } from "react"
import Button from 'react-bootstrap/Button'
import { cartContext } from "../context/cartContext"


function ItemCount({ detail }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(cartContext)

    useEffect(() => {

    }, [])

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    const handleAddToCart = () => addToCart({ ...detail, qty: count })

    return (
        <div>
            <p>{count}</p>
            <Button variant="secondary" onClick={handleSub}>-</Button>
            <Button variant="outline-secondary" onClick={handleAddToCart}>Agregar al Carrito</Button>
            <Button variant="secondary" onClick={handleAdd}>+</Button>
        </div>
    )
}

export default ItemCount

