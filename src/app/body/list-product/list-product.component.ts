import { Component, Output, EventEmitter } from '@angular/core';
import { IProduct, IDiscount } from '../interface/IProduct';
import { productList, coupon } from 'src/app/dataFake/data';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['../body.component.css']
})
export class ListProductComponent {
  products = productList;
  
  coupon: IDiscount[] = coupon()
  subTotal: number = 0;
  tax: number = 0;
  vat: number = 10;
  total: number = 0;
  promo:string = '';
  discount:number = 0;

  constructor() {
  };

  ngOnInit() {
  };

  removeProduct(id:number){
    const indexOf = productList.findIndex(p => p.id == id);
    productList.splice(indexOf, 1);
  }
  getDiscount(value:any) {
    const code = this.coupon.find(d => d.name == value);
    if (code) {
      this.discount = code.value
      this.promo = ''
    } else {
      this.discount = 0;
      this.promo = 'Discount is valid';
    }
  }

  getValueQuantity(element:any) {
    const productIndex: number = productList.findIndex(p => p.id == element.step);
    productList[productIndex].quantity = parseInt(element.value); 
  };
  ngDoCheck() {
    this.subTotal = productList.reduce((init, product) => {
      return init + ( product.price * product.quantity)
    }, 0)
    this.tax = this.subTotal * (this.vat / 100);
    this.total = this.subTotal + this.tax;

    if (this.discount) {
      const discount = this.subTotal * ( this.discount / 100 );
      this.tax -= this.tax * ( this.discount / 100 );
      this.total = this.subTotal - discount - this.tax;
      this.discount = discount;
    }
  }
}
