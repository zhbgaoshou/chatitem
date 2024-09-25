export interface IUserFormData {
  username: string;
  email?: string;
  password: string;
}

export interface ILoginResponse {
  access: string;
  refresh: string;
}

export interface IUserInfo {
  id: number;
  username: string;
  email: string;
}