import { ReactNode } from "react";
import { StyledDiv } from "./style";

interface IModalFormContainerProps {
  children: ReactNode;
}

const ModalFormContainer = ({ children }: IModalFormContainerProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default ModalFormContainer;
