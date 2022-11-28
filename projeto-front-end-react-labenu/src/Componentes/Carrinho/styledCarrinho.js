import styled from "styled-components";
import logo from "../../assets/space-pixel-art.gif"

export const Div = styled.div`
    border: 4px solid black;
    border-radius: 10px;
    width: 22vw;
    height: 77vh;
    max-height: 77vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    padding: 2px;
    color: aliceblue;
    background-image: url(${logo});
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid aliceblue;
    border-radius: 5px;
    margin: 2px;
    padding: 3px;
    button{
        max-width: 100px;
    }
`