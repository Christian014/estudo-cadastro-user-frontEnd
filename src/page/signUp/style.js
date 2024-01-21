import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    

    div{
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        #outlined-basic{
            align-self: center;
        }
        
    }
`;