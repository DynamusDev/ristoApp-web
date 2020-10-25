import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { QRCode } from 'react-qrcode-logo';
import { useReactToPrint } from 'react-to-print';

import { api } from '../services/api'
import Side from '../components/side'

import { Container, Add, Close } from '../styles/home';
import { FiTrash } from 'react-icons/fi';

function Home() {
  const history = useHistory();
  const [tables, setTables] = useState([]);
  const [number, setNumber] = useState('');
  const [places, setPlaces] = useState('');
  const [add, setAdd] = useState(false);
  const componentRef = useRef();

  var store = JSON.parse(localStorage.getItem('store') || '')

  async function loadTables() {
    const response = await api.get(`table?storeId=${store.id}`)
    if(response.data.status === 200) {
      setTables(response.data.tables)
    }
  }

  function Print(item: { number: number; places: number; status: string; storeId: string; }) {
    return (
      <div>
        <h1> Mesa {item.number} </h1>
        <h2> {item.places} lugares </h2>
        <h2> {item.status} </h2>
        <QRCode qrStyle='dots' bgColor='#F08700' value={ item.number.toString() + '/' + item.storeId } />
      </div>
    )
  }

  async function CreateTable(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if(number === ''){
      alert('Por favor, informe o número da mesa')
    }else if(places === ''){
      alert('Por favor, informe o número de lugares nessa mesa')
    }else {
      const response = await api.post('table', 
        {
          number,
          storeId: store.id,
          places
        }
      )

      if (response.data.status === 200) {
        loadTables()
        setAdd(false)
        setNumber('')
        setPlaces('')
        alert(response.data.message)
      } else {
        alert(response.data.error)
        setNumber('')
      }
    }
  }

  async function handleDeleteTable(id: number) {
    const response = await api.delete(`table?id=${id}&storeId=${store.id}`)

    if(response.data.status === 200) {
      alert(response.data.message)
      setTables(tables.filter((table: any )=> table.id !== id))
    }
  }

  useEffect(() => {
    loadTables()
  }, [])

  return (
    <Container>
      <header>
        <h1>Bem Vindo, { store.name } </h1>
      </header>
      <div>
        <Side />
        <div>
          {
            add === false ?
            <Add onClick={()=>{setAdd(true)}} size={40} color='#333' />
            :
            <Close onClick={()=>{setAdd(false)}} size={40} color='#333' />
          }
          {
            add === false ? 
            <>
              {
                tables.length > 0 ?

                tables.map((table: any) => (
                <div>
                  <button>
                    <FiTrash onClick={()=>{handleDeleteTable(table.id)}} size={25} color='#FFF' />
                  </button>
                  <h1> Mesa {table.number} </h1>
                  <h2> {table.places} lugares </h2>
                  <h2> {table.status} </h2>
                  {/* <button onClick={()=>{}}>Print this out!</button> */}
                  <QRCode qrStyle='dots' bgColor='#F08700' value={ table.number.toString() + '/' + table.storeId } />
                </div>
              ))
              :
              <h1 className='empty'> Nenhuma mesa cadastrada, clique em + para cadastrar </h1>
            }
            </>
            :
            <form onSubmit={CreateTable}>
              <input placeholder="Número da mesa"
                value={number}
                onChange={e => setNumber(e.target.value)}
              />

              <input placeholder="Número de lugares"
                value={places}
                onChange={e => setPlaces(e.target.value)}
              />
        
              <button className="button" type="submit">
                Cadastrar mesa
              </button>
            </form>
          }
        </div>
      </div>
    </Container>
  )
}

export default Home;