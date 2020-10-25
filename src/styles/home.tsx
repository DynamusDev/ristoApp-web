import styled from "styled-components";
import { FiPlus, FiX } from 'react-icons/fi';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  background-color: #fcfcff;

  header {
      width: 100vw;
      height: 10vh;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #F08700;

      h1 {
        font-size: 2em;
        text-align: center;
        color: #FFF
      }

      @media (max-width: 636px){
        h1 {
          font-size: 1.5em;
        }
      }

      @media (max-width: 396px) {
        h1 {
          font-size: 1.2em;
        }
      }
    }

  div {
    height: 90vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcfcff;

    div {
      position: relative;
      height: 90vh;
      width: 100vw;
      overflow: auto;
      padding: 90px;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 24px;

      div {
        height: 550px;
        width: 150px;
        padding: 20px;
        border-width: 1px;
        border-radius: 15px;
        background-color: #3c5490;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          font-size: 30px;
          margin-bottom: 5px;
          color: #fcfcff;
        }

        h2 {
          font-size: 25px;
          margin-bottom: 5px;
          color: #fcfcff;
        }

        button {
          background-color: transparent;
          border-width: 0px;
          height: 30px;
          width: 30px;
          margin-left: 250px;
          margin-bottom: 0px;
          padding: 0px;

          display: flex;
          justify-content: flex-end;
        }
      }

      form {
        width: 300%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
          width: 40%;
          font-size: 25px;
        }

        button {
          width: 40%;
          background-color: #3c5490;
          font-size: 25px;
        }
      }
    }
  }
`

export const Add = styled(FiPlus)`
  position: absolute;
  top: 30px;
  right: 40px;
`

export const Close = styled(FiX)`
  position: absolute;
  top: 30px;
  right: 40px;
`