import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { BasketItem } from './basket-item.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public basketChange: EventEmitter<BasketItem[]> = new EventEmitter<BasketItem[]>();
  private basketItemList: BasketItem[];
  private storageKey: string = 'basket';

  constructor() {
    this.basketItemList = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
  }

  public getCurrentBasket() {
    return this.basketItemList;
  }

  public addProductToBasket(product: Product, newQuantity: number) {
    const basketItem = new BasketItem();
    basketItem.product = product;
    basketItem.quantity = newQuantity;

    const findIndex = this.basketItemList.findIndex((item: BasketItem) => {
      return item.product.productId == product.productId
    });

    if (findIndex >= 0) {
      this.basketItemList[findIndex].quantity = newQuantity;
    } else {
      this.basketItemList.push(basketItem);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(this.basketItemList));
    this.basketChange.emit(this.basketItemList);
  }

  public removeItemFromBasket(product: Product) {
    const findIndex = this.basketItemList.findIndex((item: BasketItem) => {
      return item.product.productId == product.productId
    });

    if (findIndex >= 0 ) {
      this.basketItemList.splice(findIndex, 1);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(this.basketItemList));
    this.basketChange.emit(this.basketItemList);
  }

  public clearBasket() {
    this.basketItemList = [];
    localStorage.setItem(this.storageKey, JSON.stringify(this.basketItemList));
    this.basketChange.emit(this.basketItemList);
  }
}
