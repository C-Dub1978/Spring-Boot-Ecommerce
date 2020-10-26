import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(public productService: ProductService) {}
}
