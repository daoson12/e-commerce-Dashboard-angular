import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { LandingPageComponent } from './layouts/landingsection/landing-page/landing-page.component';



const routes: Routes = [
  // {
  // path:'',component:LandingPageComponent
  // },

  {path:'', component:HomeComponent,
   children:[
    {
       path: '', 
       loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) 
    },
    {
      path: 'create-category', 
      loadChildren: () => import('./components/category/create-category/create-category.module').then(m => m.CreateCategoryModule) 
   },
   {
     path: 'list-category', 
     loadChildren: () => import('./components/category/list-categories/list-categories.module').then(m => m.ListCategoriesModule) 
  },
  {
    path: 'create-product', 
    loadChildren: () => import('./components/product/create-product/create-product.module').then(m => m.CreateProductModule) 
 },
 {
   path: 'list-product', 
   loadChildren: () => import('./components/product/list-products/list-products.module').then(m => m.ListProductsModule) 
}
   ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
