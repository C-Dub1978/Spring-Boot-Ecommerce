import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product.model";
import {filter, map, tap} from "rxjs/operators";
import {GetResponse} from "../models/get-response.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_ENDPOINT = 'http://localhost:8080/api/products';
  private _products$ = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) { this.fetchProductList() }

  fetchProductList(): void {
    this.httpClient.get<GetResponse>(this.API_ENDPOINT).pipe(
      filter(
        (res) => !!res && !!res._embedded && !!res._embedded.products && res._embedded.products.length > 0
      ),
      map(res => res._embedded.products),
      tap((products: Product[]) => this._products$.next(products))
    ).subscribe();
  }

  getProducts$(): Observable<Product[]> {
    return this._products$.asObservable();
  }
}
