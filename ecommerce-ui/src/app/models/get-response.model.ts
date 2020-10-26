import { Product } from './product.model';
import { ProductCategory } from './product-category.model';

export interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}

export interface GetResponseProductCategories {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
