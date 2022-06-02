export interface IUser {
  id: number;
  username: string;
  password: string;
  email: string
  profileImg?: string;
}

export interface IRecipe {
  id: number;
  title: string;
  image: string;
}

export interface INavbarProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
} 

export interface ILoginProps {
  setUser: (user: IUser) => void;
}

export interface IRecipeContainerProps {
  recipes: IRecipe[];
}

export interface IRecipeItemProps {
  recipe: IRecipe;
}

export interface ISearchContainerProps {
  setRecipes: (recipes: IRecipe[]) => void;
}
