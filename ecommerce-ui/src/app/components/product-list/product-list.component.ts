import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  paramMapSub$: Subscription;
  producstSub$: Subscription;
  products: Product[] = [];
  currentProductId: number;

  constructor(
    public productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramMapSub$ = this.activatedRoute.paramMap.subscribe((params) => {
      this.listProducts();
    });
    this.producstSub$ = this.productService
      .getProducts$()
      .subscribe((products: Product[]) => (this.products = products));
  }

  listProducts(): void {
    this.currentProductId =
      +this.activatedRoute.snapshot.paramMap.get('id') || 1;
    this.productService.getProducts(this.currentProductId);
  }

  ngOnDestroy(): void {
    this.paramMapSub$.unsubscribe();
  }
}
