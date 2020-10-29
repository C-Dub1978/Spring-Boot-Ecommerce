import { Product } from './product.model';
import { ProductCategory } from './product-category.model';

export interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

export interface GetResponseProductCategories {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
