import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcfcff;

  img{
    width: 450px;
  };

  form{
    width: 100%;
    max-width: 450px;

    align-items: center;
    background-color:#fcfcff;

    p {
      text-align: center;
      color: #25282a;
      font-size: 20pt;
    };

    input {
      font-size: 24px;
      background: #FFF
    };

    button {
      background-color: #F08700;
      color: #FFF;
      justify-content: center;
      align-items: center;
    };

    p {
      font-size: 32px;
      margin-bottom: 32px;
      align-items: center;
      text-align: center;
    }
  }
`;