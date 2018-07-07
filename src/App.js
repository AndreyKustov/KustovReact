import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
            <div className ="container">
              <Hello />
            </div>
    );
  }
}

function Hello () {
  let phrase = "Academy"
  return (
    <div className ="main-block text-center">
      <h1>Hello {phrase}!</h1>
      <SayFullName name="Andrey" surname="Kustov" link="https://vk.com/id85930382"/>
    </div>
  )
}

function SayFullName (props) {
  return (
          <div className ="about">
            <h2> Мое имя {props.name}, фамилия - {props.surname}</h2>
            <a href={props.link}> Ссылка на мой профиль</a>
          </div>
  )
}

export default App;
