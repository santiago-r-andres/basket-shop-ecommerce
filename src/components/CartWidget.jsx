import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


function CartWidget() {
    const { getQty } = useCart()

    return (
        <div>
            <IconButton aria-label="cart" as={Link} to='/cart'>
                <StyledBadge badgeContent={getQty()} color="success">
                    <ShoppingCartIcon color="success" fontSize="large" />
                </StyledBadge>
            </IconButton>
        </div>

    )
}
export default CartWidget