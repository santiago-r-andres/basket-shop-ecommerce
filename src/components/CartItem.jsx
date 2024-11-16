import * as React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import Card from 'react-bootstrap/Card'

function CartItem({ product, onRemove }) {
    return (
        <Card className="mb-4" style={{ width: '18em', height: '100%' }} key={product.id}>
            <Card.Img variant="top" src={product.images} alt="producto" width="200"
                height="auto" />
            <Card.Body>
                <p>{product.title} x {product.qty}</p>
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => onRemove(product.id)}>
                        Eliminar
                    </Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}
export default CartItem 