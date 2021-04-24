import React from 'react';
import { Container, Row, Col, Button, Tab, Tabs, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = ({ className = false }) => {
  const latestData = [
    { date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
    { date: '21/07', description: 'SUPERMERCADO 02323626', value: '275,00' },
    { date: '20/07', description: 'NETFLIX 235236', value: '30,00' },
    { date: '15/07', description: 'FARMÁCIA 12125', value: '350,76' },
  ];

  const futureData = [
    { date: '22/08', description: 'SAlÁRIO 24h 012345', value: '3.000,00' },
    { date: '21/08', description: 'IMAGINE 02323626', value: '275,00' },
    { date: '20/08', description: 'NETFLIX 235236', value: '30,00' },
    { date: '15/08', description: 'FARMÁCIA 12125', value: '350,76' },
  ];

  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className="align-content-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h4>Marcelo A. Borges</h4>
              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          <Button
            className="dashboard__button dashboard__button--active text-left"
            variant="link"
            size="lg"
            block
          >
            Minha Conta
          </Button>
          <Button
            className="dashboard__button  text-left"
            variant="link"
            size="lg"
            block
          >
            Pagamentos
          </Button>
          <Button
            className="dashboard__button text-left"
            variant="link"
            size="lg"
            block
          >
            Extrato
          </Button>
        </Col>
        <Col xs={12} lg={3} className="mt-lg-3 ">
          <Col xs={12} lg={12} className="mt-lg-4 pt-lg-5">
            <h3 className="my-5">Conta Corrente</h3>
            <h6>
              <small>
                <strong>Saldo em conta corrente</strong>
              </small>
            </h6>
            <h4 className="text-success mb-4">
              <small>
                <strong>R$ </strong>
              </small>
              3.500.000
              <small>,00</small>
            </h4>
            <h6>
              <small>
                <strong>Cheque especial</strong>
              </small>
            </h6>
            <p className="mb-0">Limite disponível</p>
            <p className="mb-4">R$ 5.000,00</p>
            <Button variant="secondary">Ver extrato</Button>
          </Col>
        </Col>
        <Col xs={12} lg={5} className="mt-lg-5 pt-5">
          <Tabs
            className="mt-lg-5 pt-lg-5"
            defaultActiveKey="latestDeposits"
            id="noanim-tab-example"
          >
            <Tab eventKey="latestDeposits" title="Últimos lançamentos">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {latestData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos futuros">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {futureData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
