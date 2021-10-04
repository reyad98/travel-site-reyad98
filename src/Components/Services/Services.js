import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Choise from '../Choise/Choise';

const Services = () => {
    const [news,setNews] = useState([])
  console.log(news);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data =>setNews(data))
    },[])
    return (
        <div className="services">
             <Row xs={1} md={2} className="g-4">
              {
                  news?.map(first => <Choise
                    frist={first}
                  ></Choise> )
              }
             </Row>
        </div>
    );
};

export default Services;