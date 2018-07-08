import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

const Repair = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;

  span {
    font-size: 24px;
    line-height: 30px;
    display: block;
  }
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  color: #fff;
  margin-top: 54px;
  text-align: left;
`
const CallButton = styled.button`
  background-color: #ffa14b;
  width: 247px;
  height: 67px;
  border-radius: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  outline: none;
  border: none;
  margin-top: 32px;
`

class Main extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <Text>
            Оставьте заявку на бесплатную диагностику без очереди,
            и получите защитное стекло, стоимостью 1000 рублей,
            с установкой в подарок!
          </Text>
          <CallButton>
            Оставить заявку!
          </CallButton>
        </Col>
        <Col lg={6} lgOffset={1}>

        </Col>
      </Row>
    );
  }
}

export default Main
