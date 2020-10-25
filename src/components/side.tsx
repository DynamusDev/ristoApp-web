import React from 'react';
import { useHistory } from 'react-router-dom';
import {FiLogOut, FiHexagon} from 'react-icons/fi';
import { FaFreeCodeCamp } from 'react-icons/fa';

import { Container } from '../styles/components/side';

function Side() {
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push('/');
  }

  return (
  <Container>
    <button onClick={()=>{history.push('/home');}}>
      <FiHexagon size={30} color='#fcfcff'/>
      Mesas
    </button>
    <button onClick={()=>{alert('Clicou')}}>
      <FaFreeCodeCamp size={30} color='#fcfcff'/>
      Cozinha
    </button>
    <button onClick={()=>{logout()}}>
      <FiLogOut size={30} color='#fcfcff'/>
      Logout 
    </button>
  </Container>
  )
}

export default Side;