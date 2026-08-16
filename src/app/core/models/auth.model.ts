export interface User {
  id: number;
  name: string;
  email: string;
  role: number;
  permissions: string[];
}

export interface LoginResponse {
  message: string;
  data: {
    token: string;
    user: User;
  };
}