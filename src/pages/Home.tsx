import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {  } from 'react-icons/fi';

import { api } from '../services/api'
import Side from '../components/side'

import { Container } from '../styles/home';

function Home() {
  const history = useHistory();

  var store = JSON.parse(localStorage.getItem('store') || '')

  return (
    <Container>
      <Side />
        <header>
          <h1>Bem Vindo, { store.name } </h1>
        </header>
    </Container>
  )
}

export default Home;