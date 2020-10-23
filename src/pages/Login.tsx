import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import move from '../assets/move.gif'

import { api } from '../services/api'

import { Container } from '../styles/login';

function Login() {
  const [identification, setIdentification] = useState('');
  const history = useHistory();

  useEffect(() => {
      const value = localStorage.getItem('store')
      if (value != null) {
        history.push('/home')
      }
  }, [history])

  async function handleLogin(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(identification === ''){
      alert('Por favor, preencha o campo de ID')
    } else{
      try{
        const response = await api.post('login_store', {
                id: identification
              }
            );

        localStorage.setItem('store', JSON.stringify(response.data.store));
        console.log(response.data)
        history.push('/home')
        // alert('logged')
      }catch(error) {
        console.log(error)
        alert('Nenhuma loja encontrada com esse login')
      }
    }
  }

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <img className="logo" src={move} alt="RistoApp"/>
        <p>Bem vindo ao nosso painel administrativo</p>

        <input placeholder="Digite aqui a sua ID"
          value={identification}
          onChange={e => setIdentification(e.target.value)}
        />

        <button className="button" type="submit">
          <FiLogIn size={30} color="#FFF"/>
        </button>
      </form>
    </Container>
  )
}

export default Login;