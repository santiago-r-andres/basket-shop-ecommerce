import ItemCount from "./ItemCount"
import Card from 'react-bootstrap/Card'
function ItemDetail({ detail }) {
    return (
        <div>
            <Card className="mb-4" style={{ width: '18em', height: '100%' }}>
                <Card.Img variant="top" src={detail?.images[0]} alt="imagen producto" width="300"
                    height="auto" />
                <Card.Body>
                    <Card.Title><h1>{detail?.title}</h1></Card.Title>
                    <Card.Text>{detail?.description}</Card.Text>
                </Card.Body>
            </Card>
            <ItemCount />
        </div>
    )
}

export default ItemDetail




