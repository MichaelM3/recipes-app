export interface IUser {
  id: number;
  username: string;
  password: string;
  email: string
  profileImg?: string;
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

