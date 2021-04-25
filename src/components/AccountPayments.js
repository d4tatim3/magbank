import React from 'react';
import { Button, Col, Table, Tabs, Tab, Form } from 'react-bootstrap';

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-3 ">
      <Col xs={12} lg={12} className="mt-lg-4 pt-lg-5">
        <h3 className="my-5 ">Pagamentos</h3>
        <Tabs className="mt-lg-2 pt-lg-2" defaultActiveKey="latest">
          <Tab eventKey="boleto" title="Boleto">
            <Form>
              <Form.Group controlId="formBarCode" className="my-5">
                <Form.Label>Código de barras</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insira o código de barras"
                />
              </Form.Group>
              <Form.Group controlId="formPaymentType" className="mb-5">
                <Form.Label>Forma de Pagamento</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    id="debit"
                    label="Debito em Conta Corrente"
                    name="paymentType"
                  />
                  <Form.Check
                    type="radio"
                    id="credit"
                    className="ml-4"
                    label="Cartão de Crédito"
                    name="paymentType"
                  />
                </div>
              </Form.Group>
              <Button variant="success">Continuar</Button>
            </Form>
          </Tab>
          <Tab eventKey="transfer" title="Tranferência">
            <Table striped borderless>
              <Form.Group className="p-4">
                <Form.Row className=" mt-3">
                  <Col xs={12} lg={4}>
                    <p className="my-2">Conta</p>
                    <Form.Label
                      className="mr-sm-2"
                      htmlFor="inlineFormCustomSelect"
                      srOnly
                    >
                      Preference
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="mr-sm-2 mb-2"
                      id="inlineFormCustomSelect"
                      custom
                      placeholder="Selecione"
                    >
                      <option value="0">Selecione</option>
                      <option value="1">Banco ABC Brasil S.A. 246</option>
                      <option value="2">Banco Bradesco S.A. 237</option>
                      <option value="3">
                        Banco Caixa Geral – Brasil S.A. 473
                      </option>
                      <option value="4">Banco Inter S.A. 077</option>
                      <option value="5">Banco ItauBank S.A 479</option>
                      <option value="6">Nu Pagamentos S.A (Nubank) 260</option>
                    </Form.Control>
                  </Col>
                  <Col xs={12} lg={4}>
                    <p className="my-2">Agência</p>
                    <Form.Control className="mb-2" />
                  </Col>
                  <Col xs={12} lg={4}>
                    <p className="my-2">Conta Corrente</p>
                    <Form.Control className="mb-2" />
                  </Col>
                </Form.Row>
                <Form.Row className=" mt-lg-3">
                  <Col xs={12} lg={6}>
                    <p className="my-2">Valor da transfêrencia</p>
                    <Form.Control type="number" className="mb-2" />
                  </Col>

                  <Col xs={12} lg={6}>
                    <p className="my-2">Identificação dos extratos</p>
                    <Form.Control />
                  </Col>
                </Form.Row>
                <Button variant="success" className="mt-5">
                  Continuar
                </Button>
              </Form.Group>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </Col>
  </>
);

export default AccountPayments;
