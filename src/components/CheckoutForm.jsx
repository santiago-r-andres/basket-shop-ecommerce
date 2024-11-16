import Button from 'react-bootstrap/Button'
function CheckoutForm({ onSubmit }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="nombre" required />
                <input type="email" placeholder="usuario@email.com" required />
                <input type="text" placeholder="numero de telefono" required />
                <Button variant="secondary" type="submit">Finalizar compra</Button>
            </form>
        </div>
    )
}

export default CheckoutForm