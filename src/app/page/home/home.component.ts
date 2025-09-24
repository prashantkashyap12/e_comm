import { Component } from '@angular/core';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { DbProductService } from '../../tools/service/db-product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _dbProductService : DbProductService) {  }
  ngOnInit(): void {
    this._dbProductService.getCategories().subscribe(res=>{
      const allData=res;  
      console.log(allData);
    })
  }
}
