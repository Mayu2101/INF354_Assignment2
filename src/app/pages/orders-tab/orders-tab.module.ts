import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersTabPage } from './orders-tab.page';

import { OrdersTabPageRoutingModule } from './orders-tab-routing.module';
import { OrdersModule } from 'src/app/modules/orders/orders.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OrdersModule,
    RouterModule.forChild([{ path: '', component: OrdersTabPage }]),
    OrdersTabPageRoutingModule,
  ],
  declarations: [OrdersTabPage]
})
export class OrdersTabPageModule {}
