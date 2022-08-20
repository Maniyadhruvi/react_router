import React, { useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';


export default function Products(props) {
    return (
        <LinkContainer to={`/products/${props.id}`}>
            <div className="col-md-4 mt-4 mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>

                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {props.price}
                        </Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card link</Card.Link>
                        <Card.Link href="#">Another link</Card.Link>


                    </Card.Body>
                </Card>

            </div>
        </LinkContainer>
    );
}
