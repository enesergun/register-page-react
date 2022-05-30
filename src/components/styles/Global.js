import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');

body {
  font-family: 'Oxygen', sans-serif;
  background-color: #F0F0F0;
    }
    
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
.icon {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
  .info {
    width: 50%;
    height: 100%;
    background-color: rgba(218, 218, 218, 1);
    position: fixed;
  }
  .header {
    font-size: 30px;
  }
  .underline {
    position: relative;
    bottom: 15px;
  }
  .article {
    font-size: 21px;
    width: 650px;
  }
  .parallelograms {
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .large {
    width: 74%;
  }
  
.form {
    width: 50%;  
    margin-left: 50%; 
    height: 110vh; 
  }
  .FormContainer {
    padding-top: 40px;
    width: 75%;
    margin: 0 auto;
  }
  
  h3 {
    margin: 0;
  }
  form {
    margin-top: 20px;
    
  }
  .formGroup {
    margin-bottom: 15px;
  }
  
  .formElement {
    display: flex;
    flex-direction: column;
  }
  .firstName {
    display: flex;
    justify-content: space-between;
  }
  
  .name,
  .surname {
    width: 45%;
  }
  
  label.required::after {
    content: "*";
    color: red;
    padding-left: 2px;
  }
  
.InfoContainer {
    padding: 40px 0 0 40px;
    color: rgba(68, 74, 255, 1);
  }
  
  /* FORM SIDE */
  
  
  .title {
    color: rgba(60, 60, 60, 1);
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.15px;
    margin-bottom: 5px;
  }
  
  
  
  input[type="text"],
  input[type="password"],
  input[type="email"] {  
    border: 2px solid #8E8E8E;
    height: 40px;
    background-color: transparent;
    border-radius: 4px;  
    font-size: 16px;
    line-height: 20.2px;
    letter-spacing: 0.15px;
    color: #000;
    outline: none;
    width: 100%
  }
  .checkBoxLabel {
    color: rgba(142, 142, 142, 1);
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    border: 2px solid #8E8E8E;
    background-color: transparent;
  }
  .RegisterButton {
    width: 100%;
    height: 56px;
    font-weight: 700;
    background-color: rgba(68, 74, 255, 1);
    color: rgba(240, 240, 240, 1);
    border: none;
    cursor: pointer;
  }
  
  .error {
    color: rgba(238, 99, 86, 1);
    font-size: 13px;
  }
  
  /* FULL HD */
  
  @media screen and (min-width: 1920px) {
    .header {
      font-size: 35px;
    }
    .article {
      font-size: 25px;
      width: 850px;
    }
    .parallelograms {
      width: 850px;
    }
    .large {
      width: 56%  
    }
    .title {
      font-size: 18px;
    }
  }
  
  /* DARK THEME */
  
  .registerDark {
    /* display: flex; */ 
    background-color: #2C2C2C; 
  }
  
  .infoDark {
    background-color: rgba(140, 140, 140, 1);
  }
  
  .titleDark, 
  .headerDark,
  .InfoContainerDark {
    color: rgba(254, 254, 254, 1);
  }
  
  .RegisterButtonDark {
    background-color: rgba(255, 191, 94, 1);
  }
`

export default GlobalStyles