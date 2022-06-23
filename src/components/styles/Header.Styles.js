import styled from 'styled-components';

export const DivStyle = styled.div`
    background-color: var(--primary);
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;
    width: 100vw;

`



export const StyledHeader = styled.header`
    background-color: var(--primary);
    width: 100vw;
    
    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
    `
    
    export const Img = styled.img`
    width: 100vw;
    align-items: center;
    background-color: var(--primary);

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        width: 100px;
        
    }
    
`