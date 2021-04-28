import styled, { createGlobalStyle, css } from 'styled-components';

// for the background of the form 
export const GlobalFormStyle = createGlobalStyle` //
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom,  #0f006e, #d6d6a3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

// "#CC5500" burnt oragne 
// "#0f006e" blue 
// #d6d6a3
export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
// this makes the form centerd on the webpage
export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;
// styling for the form 
export  const StyledForm = styled.form`
  width: 80%;
  max-width: 600x;
  padding: 40px;
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 6px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
    font-size:22px;
  }
`;


