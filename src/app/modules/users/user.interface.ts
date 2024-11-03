export interface TUser {
  name: string;
  role?: "admin" | "seller" | "user";
  email: string;
  password?: string;
  avatar: string;
}
