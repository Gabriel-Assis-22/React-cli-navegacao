import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { IUser } from "../types/user";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProviderProps = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `/users?email=${loginData.email}&senha=${loginData.senha}`
      );

      if (data.length && data[0].id) {
        setUser(data[0]);
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      // TODO: HOUVE UM ERRO
      console.error(e);
    }
  }; // <- FECHANDO handleLogin

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}; // <- FECHANDO AuthContextProviderProps
