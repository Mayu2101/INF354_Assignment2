import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasketTabPage } from './basket-tab.page';

import { BasketTabPageRoutingModule } from './basket-tab-routing.module';
import { BasketModule } from 'src/app/modules/basket/basket.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BasketModule,
    RouterModule.forChild([{ path: '', component: BasketTabPage }]),
    BasketTabPageRoutingModule
  ],
  declarations: [BasketTabPage]
})
export class BasketTabPageModule {}
