import React, { ReactNode } from "react";
import { StyledFormContainer } from "./style";

interface IFormContainerProps {
  children: ReactNode;
}

const FormContainer = ({ children }: IFormContainerProps) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export default FormContainer;
