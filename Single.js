import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Card, navbar, container } from 'react-bootstrap';
import Product from './Product';
export default function Single() {
    let { id } = useParams();
    const [products, setProducts] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then((response) => response.json())
            .then((json) => setProducts(json));

    }, [products])


    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-12 mt-4 mb-4">
                    <Card.Body>

                        <Card.Title>{products.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {products.price}
                        </Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card link</Card.Link>
                        <Card.Link href="#">Another link</Card.Link>


                    </Card.Body>
                </div>
            </div>
        </div>
    )
}
