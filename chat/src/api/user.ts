import { ILoginResponse, IUserFormData } from "@/types/user";
import http from "@/utils/http";

export const RegisterApi = (data: IUserFormData) => http.post("/user/register", data);
export const LoginApi = (data: IUserFormData) => http.post<any, ILoginResponse>("/user/login", data);
export const UserInfoApi = () => http.get("/user/info");