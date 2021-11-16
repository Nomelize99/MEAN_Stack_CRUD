import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ProductComponent } from './component/product/product.component';


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'add-product'},
  {path:'product', component: ProductComponent},
  {path:'add-product', component: AddProductComponent},
  {path:'edit-product/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
