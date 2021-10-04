import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Choise.css'

const Choise = (props) => {
    return (
        
        <div>
            <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={props.frist.img} />
                    <Card.Body className="crdcol">
                        <Card.Title>Name:{props.frist.name}</Card.Title>
                        <Card.Title>
                           Course Duration: {props.frist.duration}
                        </Card.Title>
                        <Card.Title>
                           Course Fee:$ {props.frist.fee}
                        </Card.Title>
                        <button className="buttn">Enroll Now!</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        </div>
    );
};

export default Choise;