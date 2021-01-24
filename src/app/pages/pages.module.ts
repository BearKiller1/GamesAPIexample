import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news/news.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { GenresComponent } from './genres/genres.component';
import { PlatformsComponent } from './platforms/platforms.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsComponent, StoreComponent, AboutComponent, ProductDetailComponent, AllproductComponent, GenresComponent, PlatformsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NewsComponent, StoreComponent, AboutComponent, ProductDetailComponent, AllproductComponent, GenresComponent, PlatformsComponent]
})
export class PagesModule { }
