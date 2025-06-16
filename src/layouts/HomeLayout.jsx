import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import HomeSlider from '../components/HomeSlider';
import HomeProductCard from '../components/HomeProductCard';

const HomeLayout = () => (
  <div>
    <HomeHeader />
    <br />
      <Container className="justify-content-md-center">
            {/* <HomeLayout /> */}
            <HomeSlider />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <HomeProductCard />
            </div>
        </Container>
    <Footer/>
  </div>
);

export default HomeLayout