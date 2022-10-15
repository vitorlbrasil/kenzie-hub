import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  max-width: 23rem;
  padding: 0 0.75rem;
  gap: 2rem;

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

  button {
    width: 100%;
  }
`;

export const motionDivStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
};
