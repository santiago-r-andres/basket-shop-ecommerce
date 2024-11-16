import { useCart } from "../context/cartContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"
import Swal from 'sweetalert2'
import { Button } from "react-bootstrap"



function Cart() {
    const { cart, getTotal, deleteFromCart, clearCart } = useCart()

    const navigate = useNavigate()

    const [orderId, setOrderId] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const [nombre, email, telefono] = form

        const order = {
            buyer: {
                nombre: nombre.value,
                email: email.value,
                telefono: telefono.value
            },
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }

        createOrder(order)
            .then((generatedOrderId) => {
                setOrderId(generatedOrderId)
                Swal.fire({
                    title: 'Compra Finalizada',
                    text: `Tu ID de compra es: ${generatedOrderId}`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                })
                    .then((res) => {
                        if (res.isConfirmed) {
                            clearCart()
                            navigate('/')
                        }
                    })
            })
    }

    const handleRemoveItem = (id) => {
        deleteFromCart(id)
    }

    const handleClearCart = () => {
        clearCart()
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos agregados en el carrito</p>  
            ) : (
                <div>
                    {cart.map((prod) => (
                        <CartItem
                            key={prod.id}
                            product={prod}
                            onRemove={handleRemoveItem}
                        />
                    ))}
                    <div>
                        <h3>TOTAL: usd $ {getTotal()}</h3>
                        <Button onClick={handleClearCart} variant='danger'>
                            Vaciar el Carrito
                        </Button>
                    </div>
                    <CheckoutForm onSubmit={handleSubmit} />
                </div>
            )}
        </div>
    )

}

export default Cart