import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbProductService } from '../../tools/service/db-product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-calc',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule],
  providers:[DbProductService],
  templateUrl: './cart-calc.component.html',
  styleUrl: './cart-calc.component.css'
})
export class CartCalcComponent {

  constructor(private _dbProductService: DbProductService) {  }
  ngOnInit(): void {
    this.getData();
  }

  getAllRec:any;
  getData(){
    this._dbProductService.getCategories().subscribe(res=>{
      this.getAllRec=res;
      this.getAllRec = this.getAllRec.categories.flatMap((category:any) => category.products);
      let cartList = JSON.parse(sessionStorage.getItem('CartList') || '[]'); // 
      cartList = [...new Set(cartList)]; // Remove duplicates
      this.getAllRec = this.getAllRec.filter((item:any) => cartList.includes(item.id));
      this.totalPrice();
    });
  }

  total:any = 0;
  totalPrice(): any {
    for (let item of this.getAllRec) {
      this.total += parseFloat(item.price);
    }
    this.total = parseFloat(this.total);
    return this.total;
  }

  removeItem(sr:any, id:any){
    let cartList = JSON.parse(sessionStorage.getItem('CartList') || '[]');
    let filter  = cartList.filter((a:any)=>a !== id);
    sessionStorage.setItem('CartList',JSON.stringify(filter));
    this.getData();
  }

}
