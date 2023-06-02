import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductModal from './ProductModal';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const ProductApiCard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [qury, setqury] = useState('');
  const Api = () =>{
    axios.get('https://fakestoreapi.com/products').then((users)=>{
      setUsers(users.data);
      setIsLoading(false);
    });
    
  }
  const searchInput = (e) => {
    setqury(e.target.value);
  }
    useEffect(()=>{
       Api();
    },[]);
    if(isLoading) {
      return(
        <>
        <h1>
          <center>Loading....</center>
        </h1>
        </>
      )
    }
  return (
    <>
      <div>
        <Container className='w-100 mb-5'>
          <Row>
            <input type='text' placeholder='Serch Here' onChange={searchInput} />
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          {
            users.filter((item) => {
              return item.title.toLowerCase().includes(qury.toLowerCase());
            }).map((reponse) => {
              return (
                <Col md={3} className='mb-5'>
                  <Card style={{ width: '15rem' }}>
                    <div  style={{height:'200px',overflow:'hidden'}} >
                    <Card.Img variant="top"src={reponse.image} />
                    </div>
                    <Card.Body>
                      <Card.Title>{reponse.title}</Card.Title>
                      <Card.Text>
                       <p style={{height:'20px',overflow:'hidden'}}> {reponse.description}</p>
                        <div>Price:{reponse.price}$</div>
                      </Card.Text>
                      <div style={{display:'flex'}}>
                        <div>
                          <Button variant="primary">Add to Chart</Button>

                        </div>
                        <div>
                          <ProductModal Product={reponse} />
                          
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </>
  )
}


export default ProductApiCard;