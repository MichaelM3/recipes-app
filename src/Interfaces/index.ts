export interface IUser {
  id: number;
  username: string;
  password: string;
  email: string
  profileImg?: string;
}

export interface INavbarProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
} 

export interface ILoginProps {
  setUser: (user: IUser) => void;
}
