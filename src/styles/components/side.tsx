import styled from "styled-components";

export const Container = styled.aside`
  width: 25vw;
  min-width: 150px;
  height: 90vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F08700;
  overflow: auto;

  button {
    width: 70%;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-color: transparent;
    border-width: 0;
    margin-bottom: 10px;

    font-size: 25px;
    color: #fcfcff;
  }

  @media (max-width: 390px){
    button {
      font-size: 1.5em;
    }
  }
  @media (max-width: 200px){
    button {
      font-size: 1em;
    }
  }
`;