import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { filter, map, tap } from 'rxjs/operators';
import { GetResponse } from '../models/get-response.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_ENDPOINT = 'http://localhost:8080/api/products';
  private _products$ = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) {}

  private fetchProductList(id: number): void {
    this.httpClient
      .get<GetResponse>(`${this.API_ENDPOINT}/search/findByCategoryId?id=${id}`)
      .pipe(
        filter(
          (res) =>
            !!res &&
            !!res._embedded &&
            !!res._embedded.products &&
            res._embedded.products.length > 0
        ),
        map((res) => res._embedded.products),
        tap((products: Product[]) => this._products$.next(products))
      )
      .subscribe();
  }

  getProducts(id: number): void {
    this.fetchProductList(id);
  }

  getProducts$(): Observable<Product[]> {
    return this._products$.asObservable();
  }
}
