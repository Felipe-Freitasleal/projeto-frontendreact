import styled, { createGlobalStyle } from "styled-components";
import imagem from "./assets/space-pixel-art.gif"
import img from "./assets/wallpapersden.com_hd-space-artistic-pixel-art_1920x1080.jpg"

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
    color: gray;
  }
`

export const DivBackground = styled.div`
  background-image: url(${img});
  background-size: 100%;
`

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
  background-image: linear-gradient(to bottom, white, #4c6c81, #083263, black);

  h1{
    background-image: url(${imagem});
    background-size: contain;
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
    overflow-y: overlay;

    ::-webkit-scrollbar{
      background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb{
      background-color: gray;
      border-radius: 10px;
    }
   
`
export const Footer = styled.div`
  align-self: flex-end ;
`
