import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductTabPage } from './product-tab.page';

import { ProductTabPageRoutingModule } from './product-tab-routing.module';
import { ProductModule } from 'src/app/modules/product/product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProductModule,
    RouterModule.forChild([{ path: '', component: ProductTabPage }]),
    ProductTabPageRoutingModule
  ],
  declarations: [ProductTabPage]
})
export class ProductTabPageModule {}
