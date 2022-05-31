export interface IUser {
  username: string;
  password: string;
  email: string
  profileImg?: string;
}

export interface IUserProps {
  user: IUser | null;
} 
