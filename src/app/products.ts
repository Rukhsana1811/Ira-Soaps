export type ProductCategory =
  | 'soaps'
  | 'shampoo'
  | 'face-wash'
  | 'shower-gel'
  | 'concrete-art';
 
export interface Products {
     id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  price: number;
  size: string;
  ingredients: string[];
  icon: 'bar' | 'bottle' | 'jar' | 'vase' | 'candle' | 'kit';
  hasLiveSession: boolean;
}


export interface CategoryMeta {
  id: ProductCategory | 'all';
  label: string;
  blurb: string;
}
