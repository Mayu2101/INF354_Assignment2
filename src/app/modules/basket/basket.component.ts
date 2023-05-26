import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BasketItem } from 'src/app/services/basket/basket-item.model';
import { BasketService } from 'src/app/services/basket/basket.service';
import { OrderService } from 'src/app/services/order/order.service';
import { Product } from 'src/app/services/product/product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {

  public basketItemList: BasketItem[];

  constructor(
    private toastController: ToastController,
    private basketService: BasketService,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.basketItemList = this.basketService.getCurrentBasket();
    this.basketService.basketChange.subscribe((data) => {
      this.basketItemList = data;
    });
  }

  removeFromBasket(product: Product){
    this.basketService.removeItemFromBasket(product)
  }

  async checkout() {
    this.orderService.createOrder(this.basketItemList)
    .subscribe(
      data => {
        this.showSuccessToast()
        this.basketService.clearBasket();
      },
      error => this.showErrorToast()
    );
  }

  async showSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Checkout was completed successfully!',
      duration: 3000,
      position: 'top',
      icon: 'checkmark-circle-outline',
      color: 'success'
    });
    toast.present();
  }

  async showErrorToast() {
    const toast = await this.toastController.create({
      message: 'Failed to create order',
      duration: 3000,
      position: 'top',
      icon: 'alert-circle-outline',
      color: 'error'
    });
    toast.present();
  }
}
