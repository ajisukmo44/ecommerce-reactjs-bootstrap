import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileLayout from '../layouts/Profilelayout';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Aji Sukmo',
    email: 'ajisukmo@gmail.com',
    role: 'Superadmin',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGWvMwIpsmxZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674888236273?e=1755129600&v=beta&t=jyMzQShlaJTM5nFz2dxLpT4Hb_PrQH7XPtJ2MtLrYxU',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log('Updated Profile:', profileData);
    Swal.fire({
        icon: 'success',
        title: 'Update Profile Berhasil!',
      });
    setIsEditing(false);
  };

  return (
    <div>
      <ProfileLayout />
      <Container className="mt-5 ard container mt-5 mx-auto" style={{ maxWidth: '1200px' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header className='bg-light'>
              <h4 className='py-2'>Profile Page</h4>
            </Card.Header>
                <Card.Body>
              <div className='text-center'>
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  className="rounded-circle mb-3 text-center"
                  width="150"
                  height="150"
                />
                  
             </div>
              <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </Form.Group>

                <Form.Group controlId="formBio" className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="bio"
                    value={profileData.role}
                    onChange={handleChange}
                    disabled={!isEditing}    
                  />
                </Form.Group>

                {isEditing ? (
                    <>  
                    <div className='text-end'>
                      <Button variant="success" type="submit" className="me-2">Simpan</Button>
                      <Button variant="secondary" onClick={() => setIsEditing(false)}>Batal</Button>
                    </div>
                  </>
                  ) : (
                    <div className='text-end'>
                        <Button variant="primary" onClick={() => setIsEditing(true)}>Edit Profile</Button>
                    </div>
                    )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
);
};

export default ProfilePage;