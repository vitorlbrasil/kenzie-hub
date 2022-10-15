import { createContext, ReactNode, useContext } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../UserProvider";

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechProviderData {
  addTech: (data: FieldValues, setIsAddModalVisible: (value: boolean) => void) => Promise<void>;
  deleteTech: (techId: string, setIsDetailsModalVisible: (value: boolean) => void) => Promise<void>;
  editTech: (data: FieldValues, setIsDetailsModalVisible: (value: boolean) => void) => Promise<void>;
}

export const TechContext = createContext<ITechProviderData>({} as ITechProviderData);

const TechProvider = ({ children }: ITechProviderProps) => {
  const { loadUser } = useContext(UserContext);

  const addTech = async (data: FieldValues, setIsAddModalVisible: (value: boolean) => void) => {
    try {
      await api.post("/users/techs", data);

      loadUser();

      toast.success("Tecnologia cadastrada com sucesso!", {
        autoClose: 2000,
      });

      setIsAddModalVisible(false);
    } catch (error) {
      toast.error("Falha no cadastro da tecnologia", {
        autoClose: 3000,
      });
    }
  };

  const deleteTech = async (techId: string, setIsDetailsModalVisible: (value: boolean) => void) => {
    try {
      await api.delete(`/users/techs/${techId}`);

      loadUser();

      toast.success("Tecnologia deletada com sucesso!", {
        autoClose: 2000,
      });

      setIsDetailsModalVisible(false);
    } catch (error) {
      toast.error("Falha na remoção da tecnologia", {
        autoClose: 3000,
      });
    }
  };

  const editTech = async (data: FieldValues, setIsDetailsModalVisible: (value: boolean) => void) => {
    try {
      await api.put(`/users/techs/${data.id}`, data);

      loadUser();

      toast.success("Tecnologia editada com sucesso!", {
        autoClose: 2000,
      });

      setIsDetailsModalVisible(false);
    } catch (error) {
      toast.error("Falha na edição da tecnologia", {
        autoClose: 3000,
      });
    }
  };

  return (
    <TechContext.Provider value={{ addTech, deleteTech, editTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
