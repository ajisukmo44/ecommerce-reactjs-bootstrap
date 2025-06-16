import React from 'react';
import ProductLayout from '../layouts/ProductLayout';
import Container from 'react-bootstrap/Container';
import HomeSlider from '../components/HomeSlider';
import HomeProductCard from '../components/HomeProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => (
<div>
    <Container className="justify-content-md-center">
        <ProductLayout />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <HomeProductCard />
        </div>
    </Container>
  </div>
);

export default HomePage