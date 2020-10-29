import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { GetResponseProducts } from '../../models/get-response.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  paramMapSub$: Subscription;
  productsSub$: Subscription;
  products: Product[] = [];
  previousCategoryId = 1;
  currentCategoryId: number;
  currentPage = 0;
  pageSize = 8;
  totalPageElements = 0;
  totalPages = 0;

  constructor(
    public productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramMapSub$ = this.activatedRoute.paramMap.subscribe((params) => {
      this.listProducts();
    });
    this.productsSub$ = this.productService
      .getProducts$()
      .subscribe((res: GetResponseProducts) => {
        if (res) {
          this.products = res._embedded.products;
          this.currentPage = res.page.number;
          this.pageSize = res.page.size;
          this.totalPageElements = res.page.totalElements;
          this.totalPages = res.page.totalPages;
        }
      });
  }

  listProducts(): void {
    this.currentCategoryId =
      +this.activatedRoute.snapshot.paramMap.get('id') || 1;

    // Check to see if the category id has changed from the previous, so we can
    // reset paginator page number
    if (this.previousCategoryId !== this.currentCategoryId) {
      this.currentPage = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    this.productService.getProductsPaginate(
      this.currentPage - 1,
      this.pageSize,
      this.currentCategoryId
    );
  }

  ngOnDestroy(): void {
    this.paramMapSub$.unsubscribe();
  }

  onPageChange(): void {
    this.currentCategoryId =
      +this.activatedRoute.snapshot.paramMap.get('id') || 1;
    this.productService.getProductsPaginate(
      this.currentPage,
      this.pageSize,
      this.currentCategoryId
    );
  }
}
