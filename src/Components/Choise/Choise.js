import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useFirebase from '../../hooks/usefirebase';
import Details from '../Details/Details';
import './Choise.css'

const Choise = (props) => {
    
    return (

        <div>
            <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={props.frist.img} />
                    <Card.Body className="crdcol">
                        <h3>{props.frist.name}</h3>
                        <Card.Title>
                           Description: {props.frist.duration}
                        </Card.Title>
                       
                        <button  className="buttn">Details!</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        </div>
    );
};

export default Choise;