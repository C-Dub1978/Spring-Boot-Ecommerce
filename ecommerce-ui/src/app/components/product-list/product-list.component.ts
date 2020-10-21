import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsSub$: Subscription;
  products: Product[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productsSub$ = this.productService.getProducts$().pipe().subscribe(products => this.products = products);
  }

  ngOnDestroy(): void {
    this.productsSub$.unsubscribe();
  }
}
