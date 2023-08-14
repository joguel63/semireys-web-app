import { Category } from "core/enums";

export type Product = {
  id: number;
  name: string;
  description: string;
  amount: number;
  price_production: number;
  image: string;
  category_id: Category;
  created_at: Date;
  updated_at: Date;
};
