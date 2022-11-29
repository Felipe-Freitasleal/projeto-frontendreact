import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
    max-height: 7vh;
    background-image: linear-gradient(to bottom, white, #4c6c81, #083263, black);

        span{
            display: flex;
            justify-content: space-between;
            padding: 4px;
            margin:4px;
        }
        img{
            max-height:5vh
        }
`