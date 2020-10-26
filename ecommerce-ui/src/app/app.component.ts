import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        take(1),
        filter((e: NavigationStart) => !!e && !!e.url),
        map((event: NavigationStart) => {
          const split = event.url.split('/');
          if (split.length === 2) {
            return 'Books';
          } else {
            const id = +split[split.length - 1];
            return id === 1
              ? 'Books'
              : id === 2
              ? 'Coffee Mugs'
              : id === 3
              ? 'Mouse Pads'
              : 'Luggage Tags';
          }
        }),
        tap((category: string) =>
          this.productService.setSelectedCategory(category)
        )
      )
      .subscribe();
  }
}
