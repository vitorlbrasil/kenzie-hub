import React, { MouseEventHandler, ReactNode } from "react";
import { StyledDiv } from "./style";
import { motion } from "framer-motion";

interface IModalWrapperProps {
  children: ReactNode;
  onClick: MouseEventHandler;
}

const ModalWrapper = React.forwardRef<HTMLDivElement, IModalWrapperProps>(({ children, onClick }, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <StyledDiv ref={ref} onClick={onClick}>
        <div>{children}</div>
      </StyledDiv>
    </motion.div>
  );
});

export default ModalWrapper;
