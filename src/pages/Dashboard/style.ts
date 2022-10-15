import styled from "styled-components";

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  color: var(--grey-0);
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 45rem;
    padding: 0 0.75rem;
    margin: 0 auto;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid var(--grey-3);
  }

  .userHeader {
    width: 100%;
    border-bottom: 1px solid var(--grey-3);

    .userHeader__mainDiv {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      width: 100%;
      padding: 2rem 0;

      @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: initial;
      }
    }
  }

  main {
    width: 100%;
  }

  .main__mainDiv {
    width: 100%;
  }

  .addButtonWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1.375rem;
    border-radius: 0.5rem;
    background-color: var(--grey-3);

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0.75rem 1.375rem;
      background-color: var(--grey-4);
      border-radius: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: var(--grey-2);
      }
    }
  }

  /* .removeButtonWrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  } */

  /* form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
  }

  .logoWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: fit-content;
    }
  }

  .inputWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;

    span {
      position: absolute;
      top: 4.5rem;
    }
  }

  .buttonWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    width: 100%;
  } */
`;
