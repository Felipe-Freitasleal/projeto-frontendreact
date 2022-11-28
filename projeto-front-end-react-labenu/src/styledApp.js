import styled, { createGlobalStyle } from "styled-components";
import imagem from "./assets/pixel-great-stars-from-hubble_0.png"

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
  
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: auto;
  margin: 4px;

`
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 15vh;

  h1{
    background-image: url(${imagem});
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 80px;
    color: transparent;
  }
`
export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    min-width: 77vw;
    max-width: 7vw;
    min-height: 77vh;
    max-height: 77vh;
    overflow-y: scroll;
`
export const Footer = styled.div`
  align-self: flex-end ;
`

export const Nav = styled.nav`

`

export const Aside = styled.aside`

`
