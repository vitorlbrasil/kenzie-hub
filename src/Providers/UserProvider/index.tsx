import { createContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { IUser, IUserProviderData, IUserProviderProps } from "./interfaces";

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  async function loadUser() {
    try {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        setUser(data);
      }
    } catch (error) {
      localStorage.clear();
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const signIn = async (data: FieldValues) => {
    try {
      const response = await api.post("/sessions", data);

      const { user: responseUser, token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@KenzieHub:token", token);

      setUser(responseUser);

      toast.success("Seja bem-vindo!", {
        autoClose: 2000,
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error("Falha no login", {
        autoClose: 3000,
      });
    }
  };

  const signUp = async (data: FieldValues) => {
    try {
      await api.post("/users", data);

      toast.success("Cadastro realizado", {
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    } catch (err) {
      toast.error("Falha no cadastro");
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, signIn, signUp, loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
