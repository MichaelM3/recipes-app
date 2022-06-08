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

export interface INavbarProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
} 

export interface ILoginProps {
  setUser: (user: IUser) => void;
}

export interface IRecipeContainerProps {
  recipes: IRecipePreview[];
}

export interface IRecipeItemProps {
  recipe: IRecipePreview;
}

export interface ISearchContainerProps {
  setRecipes: (recipes: IRecipePreview[]) => void;
}
