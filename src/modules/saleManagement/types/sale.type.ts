import { Product } from "modules/productManagement/types";

export type Sale = {
  id: number;
  name_client: string;
  email_client: string;
  number_phone_client: string;
  total: number;
  user_id: number;
  currency_id: number;
  created_at: Date;
  updated_at: Date;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    role_id: number;
    created_at: Date;
    updated_at: Date;
  };
  products: Product[];
};
