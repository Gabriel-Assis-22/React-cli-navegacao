import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        background-color: #1e192c;
        color: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
    }
`
export { GlobalStyle }