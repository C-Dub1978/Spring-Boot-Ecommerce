import {Routes} from "@angular/router";
import {ProductListComponent} from "./components/product-list/product-list.component";

export const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'books', component: ProductListComponent },
  { path: 'coffeeMugs', component: ProductListComponent },
  { path: 'mousePads', component: ProductListComponent },
  { path: 'luggageTags', component: ProductListComponent },
  { path: 'checkout', component: ProductListComponent },
  { path: '**', component: ProductListComponent }
];
