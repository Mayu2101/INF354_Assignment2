import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'products',
        loadChildren: () => import('../product-tab/product-tab.module').then(m => m.ProductTabPageModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('../basket-tab/basket-tab.module').then(m => m.BasketTabPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders-tab/orders-tab.module').then(m => m.OrdersTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
