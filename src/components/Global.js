import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    
    --primary: hsl(180, 29%, 50%);
    
    --Background: hsl(180, 52%, 96%);
    --Filter: hsl(180, 31%, 95%);
    --Dark-Grayish-Cyan: hsl(180, 8%, 52%);
    --Very-Dark-Grayish-Cyan: hsl(180, 14%, 20%);
}

body {
    background-color: var(--Filter);
    font-family: 'Spartan', sans-serif;
    font-size: 15px;
    align-items: center;
    height: 100wh;
    width: 100vw;
    margin: 0;
}

h2 {
    color: var(--primary);
    opacity: 0.6;
    line-height: 1.5;
}

`

export default GlobalStyles