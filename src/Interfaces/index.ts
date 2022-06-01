export interface IUser {
  id: number;
  username: string;
  password: string;
  email: string
  profileImg?: string;
}

export interface INavbarProps {
  user: IUser | null;
} 

export interface ILoginProps {
  setUser: (user: IUser) => void;
}
