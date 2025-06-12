import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';

const HeaderNav = () => {
    const user = {
      name: 'Aji Sukmo',
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGWvMwIpsmxZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674888236273?e=1755129600&v=beta&t=jyMzQShlaJTM5nFz2dxLpT4Hb_PrQH7XPtJ2MtLrYxU' // Placeholder avatar
    };
  
    return (
      <Navbar bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand href="/"><b>E-COMMERCE</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  <span>
                    <Image
                      src={user.avatarUrl}
                      roundedCircle
                      width="30"
                      height="30"
                      className="me-2"
                    />
                   <b> {user.name} </b>
                  </span>
                }
                id="user-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default HeaderNav;