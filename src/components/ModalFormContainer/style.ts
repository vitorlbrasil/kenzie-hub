import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: var(--grey-4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
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

  .twoButtonsWrapper {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  button {
    width: 100%;
  }
`;
