import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AllproductComponent } from './pages/allproduct/allproduct.component';
import { GenresComponent } from './pages/genres/genres.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';

const routes: Routes = [
  {
    path: "News",
    component: NewsComponent,
  },
  {
    path: "Store",
    component: StoreComponent,
    children: [
      { path:"Allproduct", component:AllproductComponent },
      { path:"Genres", component:GenresComponent },
      { path:"Platforms", component:PlatformsComponent },
      { path:"Details/:id", component:ProductDetailComponent },
      { path:"", redirectTo:"Allproduct", pathMatch: "full" },
      { path:"**", component:ProductDetailComponent }
    ]
  },
  {
    path: "About",
    component: AboutComponent,
  },
  {
    path:"",
    redirectTo: "News",
    pathMatch: "full",
  },
  {
    path: "**",
    component: AllproductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
