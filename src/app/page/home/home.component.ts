import { Component } from '@angular/core';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
