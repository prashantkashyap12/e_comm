import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbProductService } from '../../tools/service/db-product.service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers:[DbProductService],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {

  constructor(private _dbProductService: DbProductService) {  }
  ngOnInit(): void {
    this.getData();
  }

   getAllRec:any
   getData(){
    this._dbProductService.getCategories().subscribe(res=>{
      this.getAllRec=res;
      this.getAllRec = this.getAllRec.categories.flatMap((category:any) => category.products);
      let cartList = JSON.parse(sessionStorage.getItem('CartList') || '[]'); // 
      cartList = [...new Set(cartList)]; // Remove duplicates
      console.log(this.getAllRec);
      console.log(cartList);
      this.getAllRec = this.getAllRec.filter((item:any) => cartList.includes(item.id));
      this.totalPrice()
    });
  }


  total:any = 0;
  totalPrice(): any {
    for (let item of this.getAllRec) {
      this.total += parseFloat(item.price);
    }
    this.total = parseFloat(this.total).toFixed(2);
    return this.total;
  }

  pay(){
    alert("Payment Successful")
    sessionStorage.removeItem("CartList");
    window.location.href="/home"
  }

}
