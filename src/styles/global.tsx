import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  div, header {
    min-width: 336px;
  }

  body, form {
    font-family: 'Reem Kufi', sans-serif;
    font-size: 14px;
    background-color: #fcfcff;
    text-rendering: optimizeLegibility;
  };

  html, body, #root {
    height: 100vh;
  };

  input, button, textarea {
    /* font-family: 400 18px 'Reem Kufi', sans-serif; */
    width: 100%;
    height: 60px;
    resize: vertical;
    color: #333;
    background-color: #fcfcff;
    border: 0.3px solid #333;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 15px;
    text-align: center;
    font-family: 'Reem Kufi', sans-serif;
  };

  button {
    cursor: pointer;
  }

  .empty {
    width: 100vw;
    text-align: center;
    font-family: 'Reem Kufi', sans-serif;
  }

  .button{
    /* font-family: 400 18px 'Reem Kufi', sans-serif; */
    width:100%;
    height: 50px;
    background: #0056A7;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    justify-content: center;
    line-height: 60px;
    transition: filter .2s;
  }
  .button:hover{
    filter: brightness(90%);
  }
`;