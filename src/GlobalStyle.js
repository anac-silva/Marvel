import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; }

    body {
        background-color: #f5f5f5ff;
        color: #000000ff;
        font-family: 'Roboto', sans-serif;
    }

    html, body, #root { height: 100%; }

    #root {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
    }
    main {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
    }
    footer {
        margin-top: auto;
    }
`;