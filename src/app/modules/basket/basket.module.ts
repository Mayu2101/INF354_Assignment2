import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BasketComponent } from './basket.component';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [BasketComponent],
  exports: [BasketComponent]
})
export class BasketModule { }
