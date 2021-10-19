import React from 'react';
import { Card } from 'react-bootstrap';
import './Mypart.css'

const Mypart = (props) => {
    const{name,img} = props.me;
    return (
        <div>
           
            <div>
            <Card className="bg-color">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                <h1>Happy Doc Time</h1>
                    <Card.Title>{name}</Card.Title>
                    <h5>
                   Our services is a term that refers to medical and surgical services and the supporting laboratories, equipment and personnel that make up the medical and surgical mission .
                   Hospital services make up the core of a hospital's offerings. They are often shaped by the needs or wishes of its major users to make the hospital a one-stop or core institution of its local commun ity or medical network. Hospitals are institutions comprising basic services and personnel—usually departments of medicine and surgery—that administer clinical and other services for specific diseases and conditions, as well as emergency services.

                    </h5>
                </Card.ImgOverlay>
            </Card>
            </div>
            <h2 className="last">Our Services</h2>
        </div>
    );
};

export default Mypart;