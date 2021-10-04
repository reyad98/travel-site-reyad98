import React from 'react';
import { Card } from 'react-bootstrap';
import './Mypart.css'

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
                    This talk covers the origins and early uses of photography, considering what set the technology apart from other forms of visual media. What is photography? What truth value does it have? How has it shaped our relationship to art and science, self and other, life and death? Such are the guiding questions of the lecture series. This inaugural talk begins to answer them by looking at the images of William Henry Fox Talbot and other early photographers, introducing some key concepts and outlining popular scholarly perspectives on photographic technologies.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </div>
            <h2 className="last">Our Services</h2>
        </div>
    );
};

export default Mypart;