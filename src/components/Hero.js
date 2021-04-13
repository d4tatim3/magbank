import React from 'react';
import { Row, Col, Jumbotron, Button, Image, Container } from 'react-bootstrap';
import './Hero.scss';
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';

const Hero = () => (
  <Jumbotron className="text-center text-light hero my-auto rounded-0">
    <Container>
      <Row className="my-lg-5 spacing-itens">
        <Col lg className="text-lg-rigth my-lg-5">
          <Image className="d-lg-none" src={logo} />
          <Image className="d-none d-lg-inline-block" src={logoDesktop} />
        </Col>
        <Col lg className="text-lg-left my-lg-5">
          <Container>
            <p className="display-4">Pague suas contas pelo nosso APP</p>
            <Button variant="outline-light">Abra sua conta</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Hero;
