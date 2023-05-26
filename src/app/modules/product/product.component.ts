import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { BasketService } from 'src/app/services/basket/basket.service';
import { Product } from 'src/app/services/product/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  public productList: Product[];
  public loading: boolean = true;
  private loadingModel: any;

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  async ngOnInit() {
    await this.showLoading();
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
      this.loadingModel.dismiss();
    });
  }

  async addToBasket(product: Product, quantity: number) {
    if (!quantity || quantity < 1) {
      const toast = await this.toastController.create({
        message: 'Please enter a quantity above zero',
        duration: 3000,
        position: 'top',
        icon: 'alert-circle-outline',
        color: 'warning'
      });
      toast.present();
    } else {
      this.basketService.addProductToBasket(product, quantity);
      const toast = await this.toastController.create({
        message: 'Added to basket!',
        duration: 3000,
        position: 'top',
        icon: 'checkmark-circle-outline',
        color: 'success'
      });
      toast.present();
    }
  }

  async showLoading() {
    this.loadingModel = await this.loadingController.create({
      message: 'Loading products...',
    });
    await this.loadingModel.present();
  }

}
