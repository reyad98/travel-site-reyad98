import React from 'react';
import { Card } from 'react-bootstrap';

const Mypart = (props) => {
    const{name,img} = props.me;
    return (
        <div>
           
            <div>
            <Card className="bg-dark text-white">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                <h1>Learn With Cam</h1>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            </div>
            <h2 className="last">Our Services</h2>
        </div>
    );
};

export default Mypart;