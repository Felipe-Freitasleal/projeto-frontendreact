import styled from "styled-components";
import logo from "../../assets/space-pixel-art.gif"

export const Div = styled.div`
    border: 4px solid black;
    border-radius: 10px;
    width: 22vw;
    height: 65vh;
    max-height: 66vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    padding: 2px;
    color: lightgray;
    background-image: url(${logo});

    button{
        border: transparent;
        background-color: transparent;
        box-shadow: -0.25px 0.15px 4px darkgray;
        border-radius: 5px;
        color: grey;
        max-width: 150px;
            :hover{
            background-color: #eeeee4;
            color: black;
            }
    }
    .Limpar{
        align-self: center;
        border: 2px solid grey
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid aliceblue;
    border-radius: 5px;
    margin: 2px;
    padding: 3px;
`