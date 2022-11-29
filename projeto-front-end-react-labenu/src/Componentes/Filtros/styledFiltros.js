import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    button{
        border: transparent;
        background-color: transparent;
        box-shadow: -0.25px 0.15px 4px darkgray;
        border-radius: 5px;
            :hover{
            box-shadow: -0.25px 0.15px 8px gray;
            background-color: #eeeee4;
            }
    }
`

export const Select = styled.select`
    max-height: 20px;
`
export const Label = styled.label`
    display: grid;
    grid-template-rows: 1 fr 1 fr;
        :hover{
                box-shadow: -0.25px 0.15px 8px darkgray;
                border-radius: 5px;
        }
`