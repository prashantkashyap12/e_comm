import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbProductService } from '../../tools/service/db-product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart-calc',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[DbProductService],
  templateUrl: './cart-calc.component.html',
  styleUrl: './cart-calc.component.css'
})
export class CartCalcComponent {

  constructor(private _dbProductService: DbProductService) {  }
  ngOnInit(): void {
    this.getData()
  }

  // Method to fetch data from the service
  getRec:any;
  getData(){
    this._dbProductService.getCategories().subscribe(res=>{
      this.getRec=res;
      console.log(this.getRec.categories);
    });
    

  }




}
