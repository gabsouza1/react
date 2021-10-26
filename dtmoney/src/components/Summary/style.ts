import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -9rem;


    div { 
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 1.25rem;
        color: var(--text-title);

        
    header { 
        display: flex;
        align-items: center;
        justify-content: space-between;
        }

    strong { 
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
        }
    
        &.highliight-background {
            background: var(--green);
        }
    
    }

`