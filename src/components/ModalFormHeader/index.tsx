import { ReactNode } from "react";
import { StyledDiv } from "./style";

interface IModalFormHeader {
  children: ReactNode;
}

const ModalFormHeader = ({ children }: IModalFormHeader) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default ModalFormHeader;
