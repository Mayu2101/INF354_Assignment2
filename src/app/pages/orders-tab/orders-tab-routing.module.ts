import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersTabPage } from './orders-tab.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersTabPageRoutingModule {}
