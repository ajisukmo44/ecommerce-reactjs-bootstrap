import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import HeaderNav from '../components/HeaderNav';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  if (!product) return <p>Produk tidak ditemukan</p>;

  return (
    <div>
    <HeaderNav />
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} className=' p-5'/>
          </Card>
        </Col>
        <Col md={6}>
          <h2 className='border-bottom'>{product.name}</h2>
          <h4 className="text-success">{formatRupiah(product.price)}</h4>
            <p>{product.description}</p>
            <Link to={`/checkout/${product.id}`}>
              <Button variant="primary">
                Beli Sekarang
              </Button>
            </Link>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ProductDetail;