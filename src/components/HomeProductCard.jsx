import React, { useState } from 'react';
import { Card, Button, Row, Col, Pagination, Container, Form } from 'react-bootstrap';
import products from '../data/products';
import { Link } from 'react-router-dom';
// Sample data

const HomeProductCard = () => {
  const [productsData, setProductPage] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};

  const renderPagination = () => (
    <Pagination className="justify-content-center mt-4">
      <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
      {Array.from({ length: totalPages }, (_, i) => (
        <Pagination.Item
          key={i + 1}
          active={i + 1 === currentPage}
          onClick={() => paginate(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );

  const filteredData = (event) => {
    console.log('carii', event);
    
    const res_data = products.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setProductPage(res_data);
  }

   const resetData = (event) => {
    console.log('reset', event);

    setProductPage(products);
  }

  return (
    <Container className='bg-light mt-4 rounded-sm p-4 mb-4'>
      <h2 className="my-4 text-center">Product List</h2>
      <Row className='p-0'>
          <Col sm={10} md={10}> 
           <Form.Control
              type="text"
              placeholder="Kata kunci..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="mb-3"
            />
          </Col>
           <Col sm={1} md={1} className='p-0'>
            <Button type="button" onClick={resetData} variant='secondary' className='btn-block w-100'>Reset</Button> 
          </Col>
          <Col sm={1} md={1} >
            <Button type="button" onClick={filteredData} variant='success' className='btn-block w-100'>Cari</Button>
          </Col>
      </Row>
      <Row>
        {currentProducts.map(product => (
          <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
            <Card className='h-100'>
              <Card.Img variant="top" src={product.image}  className='w-100  h-50 px-4 bg-light'/>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>{formatRupiah(product.price)}</strong></Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="secondary" className='mr-2'>Detail</Button>
                </Link>&nbsp;
                <Link to={`/checkout/${product.id}`}>
                  <Button variant="success">Beli</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {renderPagination()}
    </Container>
  );
};

export default HomeProductCard;