import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  body, form {
    font-family: 'Reem Kufi', sans-serif;
    font-size: 14px;
    background-color: #DADADA;
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
    background-color: #DADADA;
    border: 1px solid #DADADA;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 15px;
    text-align: center;
  };

  button {
    cursor: pointer;
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