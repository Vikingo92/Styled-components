import styled from 'styled-components';
import { css } from 'styled-components';

export const DivStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100vw;
height: 100vh;
margin-top: 460px;

& > div,
& > ul {
    flex: 1;
    display: flex;
}

@media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    width: 50%;
}

`

export const CardStyles = styled.div`
    display: flex;
    align-items: center;
    justufy-content: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.35);
    flex-direction: column;
    width: 920px;
    height: 150px;
    margin: 20px 200px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction:;
        align-items: center;
        justify-content: center;
        width: 50%;
    }


    & > div,
    & > ul  {
        display: flex;
        flex-direction:1;
        align-items: center;
        justify-content: center;
        margin-right:0 100px;
    }

    li {
        display: flex;
        list-style-type: none;
        display: inline-flex;
        cursor: pointer;   
    }


    &:hover {
        border-left: 5px solid var(--primary);
        transition: 200ms ease-in-out;
        background-color: 1px 1px 1px var(--primary);
        
    }
    
    `

export const Section1 = styled.ul`
    justify-content: space-around;
    margin: 15px 10px;
    color: var(--primary);
    
    li {
        margin: 5px 10px;
        font-weight: 700;
    }

`

export const UlStyle = styled.ul`
    color: black;
    opacity: 0.4;
    font-weignt: 500;
`

export const UlStyle2 = styled.ul`
    margin-left: 0 50px;
    display: flex;
    flex-direction: 1;


    li {
        background-color: var(--Filter);
        border-radius: 3px;
        padding: 7px;
        margin: 0 14px;
        margin-right: 10px;
        
        &:hover {
            color: white;
            background-color: var(--primary);
        }   
    }
   
`
export const ListItem = styled.p`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 30px;
    margin: 0 13px;
    font-weight: 700;
    color: var(--Very-Dark-Grayish-Cyan);
    
       
        &:hover {
        color:var(--primary);
        
        cursor: pointer;
        }     
`

export const Section2 = styled.div``

export const ListStyle = styled.li`
    color: white;
    text-transform: uppercase;
    background-color: var(--primary);
    padding: 4px 9px;
    border-radius: 15px;
    font-size: 12px;
`
export const ListStyle2 = styled.li`
    color: white;
    text-transform: uppercase;
    background-color: var(--Very-Dark-Grayish-Cyan);
    padding: 4px 9px;
    border-radius: 15px;
    font-size: 12px;
`

export const ListDetail = styled.li`
`

export const NavStyle = styled.div`
    display: flex;
    background-color: white;

    width: 920px;
    height: 150px;
    padding: 25px;
    margin-top: 0;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.35);
    
    & > div {
        display: flex;
    }

    & > ul,
    & > li {
        display: inline-flex;
        font-weight: 700;
        display:flex;
    }
    
    li {
        display: flex;
        list-style-type: none;
        background-color: var(--Filter);
        color: var(--primary);
        padding: 7px 17px;
        margin-left: 20px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 3px;

        &:hover {
            color: white;
            background-color: var(--primary);
        }
        
    }

    &:hover {
        border-left: 5px solid var(--primary);
        transition: 200ms ease-in-out;     
    }

    
@media(max-width: ${({theme}) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 50px;
    
}
`
export const ListClear = styled.p`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    cursor: pointer;
    margin-left: 300px; 
    
    &:hover {
        border-bottom: 2px solid  var(--primary);
    }
`
