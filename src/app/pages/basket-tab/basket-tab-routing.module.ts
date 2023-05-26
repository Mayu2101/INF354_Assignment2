import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketTabPage } from './basket-tab.page';

const routes: Routes = [
  {
    path: '',
    component: BasketTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketTabPageRoutingModule {}
