import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import {removeFromCart} from "../reducersComponent/Action"

import { useSelector, useDispatch } from 'react-redux'

export default function CartDetails() {
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => state.shop)
    // console.log(cart)
    return (<>
        <Container className='mt-3 d-flex'>
            {cart && cart.map((items) =>

                <Card key = {items.id} style={{ width: '18rem' }} className="m-3">
                    <Card.Img variant="top" src={items.images[0]} />
                    <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>
                            {items.description}
                        </Card.Text>
                        <Button variant="primary" className='m-1' onClick={()=>dispatch(removeFromCart(items.id))}>Remove Cart</Button>
                    </Card.Body>
                </Card>
            )}
        </Container>
    </>)
}
