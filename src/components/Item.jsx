import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <Col sm={6} md={4} lg={3}>
            <Card className="mb-4" style={{ width: '100%', height: '100%' }}>
                <Card.Img variant="top" src={item.images} width="300"
                    height="300" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.category}</Card.Text>
                    <Card.Text>usd ${item.price}</Card.Text>
                    <Button
                        variant="secondary"
                        as={Link}
                        to={`/item/${item.id}`}
                    >
                        Ver Mas
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item



