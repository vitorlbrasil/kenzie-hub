import { ReactNode } from "react";
import TechProvider from "./TechProvider";
import UserProvider from "./UserProvider";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
