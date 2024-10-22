import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'

function ItemCount () {
    const [count, setCount] = useState(0)

useEffect(() => {
   
}, [])




    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)
    
    return (
        <div>
            <p>{count}</p>
            <Button variant="secondary" onClick={handleSub}>-</Button>
            <Button variant="outline-secondary">Agregar al Carrito</Button>
            <Button variant="secondary" onClick={handleAdd}>+</Button>
        </div>
    )
}

export default ItemCount

