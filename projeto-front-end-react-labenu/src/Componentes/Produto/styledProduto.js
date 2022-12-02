import styled from "styled-components";

export const Div = styled.div`
    /* box-shadow: -0.25px 0.15px 8px gray; */
    border-radius: 5px;
    width: 23vw;
    height: 55vh;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: black;

    :hover{
        box-shadow: -0.25px 0.15px 18px gray;
    }

    button{
        border: transparent;
        background-color: transparent;
        box-shadow: -0.25px 0.15px 4px darkgray;
        border-radius: 5px;
        color: grey;
            :hover{
            background-color: #eeeee4;
            color: black;
            }
    }

    img{
        min-width: 200px;
        max-width: 200px;
        min-height: 200px;
        max-height: 200px;
        border-radius: 100px;
    }

`