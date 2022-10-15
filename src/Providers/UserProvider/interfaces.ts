import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

export interface ITech {
    id: string;
    title: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}
  
export interface IWork {
    id: string;
    title: string;
    description: string;
    deploy_url: string;
    created_at: Date;
    updated_at: Date;
}
  
export interface IUser {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: ITech[] | [];
    works: IWork[] | [];
    created_at: Date;
    updated_at: Date;
    avatar_url: string | null;
}
  
export interface IUserProviderProps {
    children: ReactNode;
}
  
export interface ISignInData {
    email: string;
    password: string;
}
  
export interface ISignUpData {
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}
  
export interface IUserProviderData {
    user: IUser | null;
    loading: boolean;
    signIn: (data: FieldValues) => Promise<void>;
    signUp: (data: FieldValues) => Promise<void>;
    loadUser: () => Promise<void>;
}