import {Product} from "./product.model";

export interface GetResponse {
  _embedded: {
    products: Product[]
  }
}
