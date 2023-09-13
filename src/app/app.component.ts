import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import localVi from '@angular/common/locales/vi'
import { IProduct } from './body/interface/IProduct';

registerLocaleData(localVi, 'vi-VN')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() listProduct:any;
  title = 'angular-tutorial';

  ngOnInit(): void {
    
  }

}
