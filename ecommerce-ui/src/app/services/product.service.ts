import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { filter, map, tap } from 'rxjs/operators';
import { ProductCategory } from '../models/product-category.model';
import {
  GetResponseProductCategories,
  GetResponseProducts,
} from '../models/get-response.model';
import { CategoryToId } from '../models/category.labels';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private PRODUCT_API_ENDPOINT = 'http://localhost:8080/api/products';
  private PRODUCT_CATEGORY_API_ENDPOINT =
    'http://localhost:8080/api/product-category';
  // tslint:disable-next-line:variable-name
  private _products = new BehaviorSubject<Product[]>([]);
  // tslint:disable-next-line:variable-name
  private _productDetail = new BehaviorSubject<Product>(null);
  // tslint:disable-next-line:variable-name
  private _productCategories = new BehaviorSubject<ProductCategory[]>([]);
  // tslint:disable-next-line:variable-name
  private _selectedCategory = new BehaviorSubject<string>('Books');

  constructor(private httpClient: HttpClient) {}

  private fetchProductList(id: number): void {
    this.httpClient
      .get<GetResponseProducts>(
        `${this.PRODUCT_API_ENDPOINT}/search/findByCategoryId?id=${id}`
      )
      .pipe(
        filter(
          (res) =>
            !!res &&
            !!res._embedded &&
            !!res._embedded.products &&
            res._embedded.products.length > 0
        ),
        map((res) => res._embedded.products),
        tap((products: Product[]) => this._products.next(products))
      )
      .subscribe();
  }

  private fetchBySearchCriteria(keyword: string, id: string): void {
    this.httpClient
      .get<GetResponseProducts>(
        `${
          this.PRODUCT_API_ENDPOINT
        }/search/findByNameContaining?keyword=${keyword.toLowerCase()}&id=${
          CategoryToId[id]
        }`
      )
      .pipe(
        map((res) => res._embedded.products),
        tap((products: Product[]) => this._products.next(products || []))
      )
      .subscribe();
  }

  private fetchProductCategoryList(): void {
    this.httpClient
      .get<GetResponseProductCategories>(
        `${this.PRODUCT_CATEGORY_API_ENDPOINT}`
      )
      .pipe(
        filter(
          (res) =>
            !!res &&
            !!res._embedded &&
            !!res._embedded.productCategory &&
            res._embedded.productCategory.length > 0
        ),
        map((res) => res._embedded.productCategory),
        tap((productCategories: ProductCategory[]) => {
          this._productCategories.next(productCategories);
        })
      )
      .subscribe();
  }

  private fetchProductDetail(id: number): void {
    this.httpClient
      .get<Product>(`${this.PRODUCT_API_ENDPOINT}/${id}`)
      .pipe(
        filter((product: Product) => !!product),
        tap((product: Product) => this._productDetail.next(product))
      )
      .subscribe();
  }

  setSelectedCategory(selectedCategory: string): void {
    this._selectedCategory.next(selectedCategory);
  }

  getProducts(id: number): void {
    this.fetchProductList(id);
  }

  getProductCategories(): void {
    this.fetchProductCategoryList();
  }

  getProductsByKeyword(keyword: string, id: string): void {
    this.fetchBySearchCriteria(keyword, id);
  }

  getProductDetails(id: number): void {
    this.fetchProductDetail(id);
  }

  getProductDetails$(): Observable<Product> {
    return this._productDetail.asObservable();
  }

  getProducts$(): Observable<Product[]> {
    return this._products.asObservable();
  }

  getProductCategories$(): Observable<ProductCategory[]> {
    return this._productCategories.asObservable();
  }

  getSelectedCategory$(): Observable<string> {
    return this._selectedCategory.asObservable();
  }

  getCurrentCategory(): string {
    return this._selectedCategory.getValue();
  }
}
