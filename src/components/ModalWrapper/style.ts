import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 23rem;
    padding: 0 0.75rem;
  }
`;
