import React from 'react';
import {
  Navbar,
  Nav,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Container,
} from 'react-bootstrap';
import './Navbar.scss';
import logo from '../assets/logo.svg';

const Navigation = () => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Magbank logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Cartão">Cartão</Nav.Link>
          <Nav.Link href="#Quem Somos">Quem Somos</Nav.Link>
          <Nav.Link href="#FAQ">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title="Acessar mihna conta"
            id="bg-nested-dropdown"
            variant="outline-light"
          >
            <Dropdown.Item eventKey="1">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Conta"
                  aria-label="Conta"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Senha"
                  aria-label="Senha"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Dropdown.Item>
          </DropdownButton>

          <Button variant="outline-light">abra sua conta</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
