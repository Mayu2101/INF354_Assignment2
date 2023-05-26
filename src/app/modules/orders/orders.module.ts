import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersComponent } from './orders.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [OrdersComponent],
  exports: [OrdersComponent]
})
export class OrdersModule { }
