import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductNavListComponent } from './components/product-nav-list/product-nav-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryComponent,
    ProductNavListComponent,
    SearchBarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
