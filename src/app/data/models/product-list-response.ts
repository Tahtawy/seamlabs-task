import { Product } from './product';

export interface ProductListResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
