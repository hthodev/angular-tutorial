import { Component, Input } from '@angular/core';
import { IProduct } from '../body/interface/IProduct';
import { productList } from '../dataFake/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Cart Shop'
  home = 'HOME'
  pageDetail = 'Cart Shop'
  count = productList.length;

  listProduct:IProduct[] = [];
  ngDoCheck() {
    this.count = productList.length
  }

}
