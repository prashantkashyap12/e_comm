import { Component } from '@angular/core';
import { DbProductService } from '../../tools/service/db-product.service';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink, CommonModule, HttpClientModule],
  providers:[DbProductService],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

constructor(private _dbProductService: DbProductService) {  }
  ngOnInit(): void {
    this.getData()
  }


  getAllRec:any;
  getData(){
    this._dbProductService.getCategories().subscribe(res=>{
    this.getAllRec=res;
    this.getAllRec = this.getAllRec.categories.flatMap((category:any) => category.products);
    let cartList = JSON.parse(sessionStorage.getItem('WishList') || '[]'); // 
    cartList = [...new Set(cartList)]; // Remove duplicates show into fornt end.
    this.getAllRec = this.getAllRec.filter((item:any) => cartList.includes(item.id));
    })
  }

  removeItem(id:any){
    let cartList = JSON.parse(sessionStorage.getItem('WishList') || '[]');
    let filter  = cartList.filter((a:any)=>a !== id);
    sessionStorage.setItem('WishList',JSON.stringify(filter));
    this.getData();
  }





}
