import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCategory } from '../../models/product-category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-nav-list',
  templateUrl: './product-nav-list.component.html',
  styleUrls: ['./product-nav-list.component.scss'],
})
export class ProductNavListComponent implements OnInit {
  productCategorySub$: Subscription;
  productCategories: ProductCategory[];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductCategories();
    this.productCategorySub$ = this.productService
      .getProductCategories$()
      .subscribe((categories: ProductCategory[]) => {
        this.productCategories = categories;
      });
  }
}
