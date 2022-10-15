import React, { ReactNode } from "react";
import "./style.css";

interface ILabelProps {
  children: ReactNode;
  htmlFor: string;
}

const Label = ({ children, htmlFor }: ILabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
