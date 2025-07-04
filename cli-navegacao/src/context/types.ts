import React from "react";
import {IUser} from "../types/user"

export interface IAuthContext {
    user: IUser;
    handleLogin: (loginData, ILoginData) => Promise<void>
}
export interface IAuthContextProviderProps {
    children: React.ReactNode;
}
export interface ILoginData{
    email: string;
    senha: string;
}