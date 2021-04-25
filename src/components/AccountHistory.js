import React from 'react';
import { Col, Table } from 'react-bootstrap';

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Col xs={12} lg={8} className="mt-lg-3 ">
      <Col xs={12} lg={12} className="mt-lg-4 pt-lg-5">
        <h3 className="my-5 ">Extrato de conta corrente</h3>
        <Table striped hover className="table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor (R$)</th>
              <th>Saldo (R$)</th>
            </tr>
          </thead>
          <tbody>
            {history.map(({ date, description, value, saldo }) => (
              <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{value}</td>
                <td>{saldo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Col>
  );
};

export default AccountHistory;
