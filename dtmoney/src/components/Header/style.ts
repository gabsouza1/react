
import styled from "styled-components";


export const Container = styled.header`

    background: var(--blue);
    
`

export const Content = styled.div`

    max-width: 1120px;
    margin: 0 auto;
    
    padding: 2rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    background: var(--blue-light);
    font-size: 16px;
    color: #fff;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;


    &:hover {
        filter: brightness(0.8);
        transition: 0.3s ease-in-out;
    }

`