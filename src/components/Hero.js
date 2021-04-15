import React from 'react';
import { Row, Col, Jumbotron, Button, Image, Container } from 'react-bootstrap';
import './Hero.scss';
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';

const Hero = () => (
  <Jumbotron className="text-center text-light hero my-auto rounded-0">
    <Container className="d-flex justify-content-center align__vertical">
      <Row className="">
        <Col lg className="text-lg-rigth my-5">
          <Image className="d-lg-none" src={logo} />
          <Image className="d-none d-lg-inline-block" src={logoDesktop} />
        </Col>
        <Col lg className="text-lg-left my-lg-5">
          <Container>
            <p className="hero__title pb-4">Pague suas contas pelo nosso APP</p>
            <Button variant="outline-light">Abra sua conta</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Hero;
