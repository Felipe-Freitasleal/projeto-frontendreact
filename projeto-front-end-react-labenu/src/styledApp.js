import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 10px;
  background-color: grey;
`
export const H1 = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const Aside = styled.aside`
  
`