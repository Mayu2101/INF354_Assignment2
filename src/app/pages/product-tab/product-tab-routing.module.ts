import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTabPage } from './product-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProductTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTabPageRoutingModule {}
