import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  background-color: #fcfcff;
  
  header {
    width: 100vw;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F08700;

    h1 {
      font-size: 2em;
      text-align: center;
    }

    @media (max-width: 396px){
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
`