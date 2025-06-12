import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import Container from 'react-bootstrap/Container';
import HomeSlider from '../components/HomeSlider';
import HomeProductCard from '../components/HomeProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => (
<div>
    <Container className="justify-content-md-center">
        <HomeLayout />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <HomeProductCard />
        </div>
    </Container>
  </div>
);

export default HomePage