import styled from "styled-components";

export const Div = styled.div`
    /* box-shadow: -0.25px 0.15px 8px gray; */
    border-radius: 5px;
    width: 20vw;
    height: 55vh;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;

    :hover{
        box-shadow: -0.25px 0.15px 18px gray;
    }

    button{
        border: transparent;
        background-color: transparent;
        box-shadow: -0.25px 0.15px 4px darkgray;
        border-radius: 5px;
            :hover{
            background-color: #eeeee4;
            }
    }
`