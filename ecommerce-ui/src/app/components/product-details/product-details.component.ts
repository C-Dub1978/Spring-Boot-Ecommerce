import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.productId = +this.route.snapshot.paramMap.get('id');
      console.log('PRODUCT ID: ', this.productId);
      this.productService.getProductDetails(+this.productId);
    }
  }
}
