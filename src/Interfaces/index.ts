export interface IUser {
  id: number;
  username: string;
  password: string;
  email: string
  image?: string;
}

export interface IUserContext {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

export interface IRecipePreview {
  id: number;
  title: string;
  image: string;
}

export interface IFullRecipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  ingredients: [];
}

