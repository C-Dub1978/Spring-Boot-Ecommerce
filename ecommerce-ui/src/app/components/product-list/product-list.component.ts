import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../models/product.model";
import {map, retry, take, tap} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsSub$: Subscription;
  dataSource: MatTableDataSource<Product>;
  columns: string[] = [
    'name',
    'description',
    'category',
    'price',
    'available',
    'inStock',
    'sku',
    'thumbnail'
  ];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productsSub$ = this.productService.getProducts$().pipe(
      map((products: Product[]) => new MatTableDataSource(products)),
      tap((dataSource: MatTableDataSource<Product>) => this.dataSource = dataSource)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.productsSub$.unsubscribe();
  }

  onImageClick(url: string) {
  }
}
