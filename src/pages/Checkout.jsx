import Swal from 'sweetalert2';
import { Card, Button, Row, Col, Pagination, Container } from 'react-bootstrap';
import products from '../data/products';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import HeaderNav from '../components/HeaderNav';

const Checkout = () => {
  const [inputValue, setInputValue] = useState(1);
  const [isPayment, setIsPayment] = useState(false);

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  };

  const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};
  
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produk tidak ditemukan</p>;

  const handleCheckout = () => {
    Swal.fire({
      icon: 'success',
      title: 'Pembayaran Berhasil!',
      text: 'Terima kasih telah berbelanja.',
    });
  };

  return (
      <div>
        <HeaderNav />
          <Container className="justify-content-md-center mb-5 container-sm" >
            <Row>
              <Col sm={2} md={2}></Col>
              <Col sm={8} md={8}> <Card className='bg-light mt-5 p-5'>
                <h2>Checkout Pembayaran</h2>
                <hr />
                <div>
                <b> Nama Produk : </b>{product.name}
                </div>
                <div>
                <b>Deskripsi : </b> {product.description}
                </div>
                <div>
                <b>Harga : </b> {formatRupiah(product.price)}
                </div>
                <div>
                <b>Masukan Jumlah produk: </b> <br /> <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    className='form-control w-25'
                    disabled={isPayment}
                  />
                </div>
                <hr />
                <h5>Total Harga :  <b>{formatRupiah(inputValue * product.price)}</b></h5>
                <hr />
                {isPayment ? (
                    <>  
                  Pembayaran melalui Bank BRI <b>623526627378851</b> An Aji Sukmo
                <br />
                <hr />
                  atau qris <br />
               <div className='container'>
                 <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className='w-10 mb-4 h-10 px-4 bg-white' />
               </div>
                      <div className='text-end'>
                        <Button variant="success" type="submit" className="w-100 mb-2" onClick={handleCheckout}>Selesai</Button> <br />
                        <Button variant="secondary" onClick={() => setIsPayment(false)} className='w-100'>Kembali</Button>
                      </div>
                    </>
                    ) : (
                      
              <div className=''>
                <hr />
                        {/* <Button variant="primary" onClick={() => setIsPayment(true)}>Selesai</Button> */}
                        <Button  variant="success" className='btn-block w-100' onClick={() => setIsPayment(true)}>Bayar Sekarang</Button>  
                      </div>
                        )}
              </Card> </Col>
              <Col sm={2} md={2}></Col>
            </Row>     
        </Container>
    </div>
  );
};

export default Checkout;