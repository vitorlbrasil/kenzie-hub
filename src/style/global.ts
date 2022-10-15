import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        box-sizing: border-box;
        /* outline: 1px solid red; */
    }

    ul, li{
        list-style: none;
    }

    :root {
        --primary-color: #ff577f;
        --primary-color-focus: #ff427f;
        --primary-color-negative: #593237;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        --success: #3fe864;
        --negative: #e83f5b;
    }

    body {
        line-height: 1;
        font-family: "Inter", sans-serif;
    }

    .App{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        width: 100%;
        min-height: 100vh;
        background-color: var(--grey-4);
    }

    /* .container{
        width: 100%;
        max-width: 720px;
        padding: 0 0.75rem;
        margin: 0 auto;
    } */

    input, select {
        height: 3rem;
        width: 100%;
        padding: 0 1rem;
        border: 1px solid transparent;
        border-radius: 0.5rem;
        font-size: 1rem;
        color: var(--grey-1);
        background-color: var(--grey-2);
    }

    input:focus-visible {
    color: var(--grey-0);
    outline: 1px solid var(--grey-0);
    }

    .Toastify__toast-theme--light {
    background: var(--grey-3);
    color: var(--grey-0);
    }

    .Toastify__close-button--light {
    color: var(--grey-0);
    opacity: 1;
    }
`;
