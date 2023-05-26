import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Order } from 'src/app/services/order/order.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  public orderList: Order[]
  private loadingModel: any;

  constructor(
    private loadingController: LoadingController,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.loadOrders();
    this.orderService.orderPlaced.subscribe((val) => {
      this.loadOrders();
    });
  }

  async loadOrders() {
    await this.showLoading();
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orderList = data;
      this.loadingModel.dismiss();
    })
  }

  async showLoading() {
    this.loadingModel = await this.loadingController.create({
      message: 'Loading orders...',
    });
    await this.loadingModel.present();
  }
}
