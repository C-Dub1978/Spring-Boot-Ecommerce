import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {CartPillsComponent} from "./components/cart-pills/cart-pills.component";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SearchBarComponent,
    CartPillsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
