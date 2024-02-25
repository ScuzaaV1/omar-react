import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {shoppinglist} from "../Data.js";
import './Cardlist.css';

const Cardlist = () => {
  return (
    <div className='cards'>
    {shoppinglist.map((el)=>  (
          <Card style={{  margin:'20px' }} id="carte">
          <Card.Img variant="top" src={el.image} className="img" />
          <Card.Body>
          <Card.Title className='title'>{el.name}</Card.Title>
          <Card.Text className='text'>
          {el.price}
          </Card.Text>
          <Button variant="primary" className='btn'>Add to card </Button>
          </Card.Body>
          </Card>
    ))}
    </div>
  );
};

export default Cardlist




