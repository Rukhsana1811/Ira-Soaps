export interface RawMaterial {
  id: string;
  name: string;
  category: string;
  img: string;
  tagline: string;
  description: string;
  price: number;
  size: string;
  ingredients: string[];
}

export interface RawMaterialCategory {
  id: string;
  label: string;
}
