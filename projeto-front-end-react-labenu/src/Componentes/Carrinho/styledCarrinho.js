import styled from "styled-components";
import logo from "../../assets/space-pixel-art.gif"

export const Div = styled.div`

    width: 22vw;
    height: 65vh;
    max-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    padding: 2px;
    color: lightgray;

    button{
        border: transparent;
        background-color: transparent;
        box-shadow: -0.25px 0.15px 4px darkgray;
        border-radius: 5px;
        color: grey;
        max-width: 150px;
        margin: 4px;
            :hover{
            background-color: #eeeee4;
            color: black;
            }
    }

    img{
        max-height:8vh
    }
    
    p{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .Limpar{
        align-self: center;
        border: 2px solid grey
    }

    ::-webkit-scrollbar{
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb{
      background-color: gray;
      border-radius: 10px;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid gray;
    border-radius: 5px;
    margin: 2px;
    padding: 3px;
`