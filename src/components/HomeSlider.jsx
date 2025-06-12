import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeSlider = () => {
  return (
        <Carousel>
          <Carousel.Item>
              <img
                className="d-block w-100"
              src="https://www.newbalance.co.id/media/weltpixel/owlcarouselslider/images/1/2/1200_x_500px_x_2-20241106-071009_1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>NEW BALANCE</h3>
              <p>Shoes, Sneakers, & Athletic Wear.</p>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbor.sirclocdn.com/unsafe/1366x552/filters:format(webp):quality(80)/https://bo.asics.co.id/media/weltpixel/owlcarouselslider/images/a/s/asicid_eb_french_open_design_website_shop_now.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>ASICS</h3>
              <p>selection of running shoes, active wear, and athletic gear.</p>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbor.sirclocdn.com/unsafe/1366x552/filters:format(webp):quality(80)/https://bo.asics.co.id/media/weltpixel/owlcarouselslider/images/s/s/ss25_limited-series_h2t_homepage-banner_sfcc_v2_hero_desktop.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>ASICS</h3>
              <p>selection of running shoes, active wear, and athletic gear.</p>
            </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src="https://www.reebok.id/cdn/shop/collections/Running_Banner.jpg?v=1719387281&width=400"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>REBOOK</h3>
              <p>Shop Athletic Shoes and Workout Clothes to Tackle</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
};

export default HomeSlider;