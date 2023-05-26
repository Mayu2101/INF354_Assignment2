import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BasketItem } from '../basket/basket-item.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public orderPlaced: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.apiUrl + 'order/getOrders');
  }

  public createOrder(basketItemList: BasketItem[]) {
    const myProducts:any[] = basketItemList.map(basketItem => {
      return {
        ProductId: basketItem.product.productId,
        ProductName: basketItem.product.productName,
        ProductDescription: basketItem.product.productDescription,
        ProductPrice: basketItem.product.productPrice,
        Quantity: parseInt(basketItem.quantity.toString())
      }
    });

    const order: any = {
      basketProducts: myProducts
    };
    
    return this.http.post<any>(environment.apiUrl + 'order/createOrder', order)
      .pipe(tap(x => this.orderPlaced.emit()));
  }
}


