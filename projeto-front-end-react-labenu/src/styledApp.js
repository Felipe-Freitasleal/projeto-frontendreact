import styled, { createGlobalStyle } from "styled-components";
import imagem from "./assets/space-pixel-art.gif"

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
  height: 18vh;
  background-image: linear-gradient(to top, white, #4c6c81, #083263, black);

  h1{
    background-image: url(${imagem});
    background-size: cover;
    background-position: top;
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
    min-height: 66vh;
    max-height: 66vh;
    overflow-y: scroll;
`
export const Footer = styled.div`
  align-self: flex-end ;
`

export const Nav = styled.nav`

`

export const Aside = styled.aside`

`
