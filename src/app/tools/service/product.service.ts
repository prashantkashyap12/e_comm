import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Yantiti Leather & Canvas Bags', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-01.png', category: 'Accessories', rating: 5, reviews: 64 },
    { id: 2, name: 'Level 20 RGB Cherry', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-02.png', category: 'Electronics', rating: 4, reviews: 32 },
    { id: 3, name: 'Logitech Streamcam', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-03.png', category: 'Electronics', rating: 4, reviews: 28 },
    { id: 4, name: '3D™ wireless headset', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-04.png', category: 'Electronics', rating: 5, reviews: 44 },
    { id: 5, name: 'Bass Meets Clarity', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-05.png', category: 'Electronics', rating: 4, reviews: 20 },
    { id: 6, name: 'Mice Logitech', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-06.png', category: 'Electronics', rating: 4, reviews: 15 },
    { id: 7, name: 'Zone Headphone', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-07.png', category: 'Electronics', rating: 5, reviews: 64 },
    { id: 8, name: '3D™ wireless headset', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-08.png', category: 'Electronics', rating: 4, reviews: 30 },
    { id: 9, name: 'Media Remote', price: 29.99, oldPrice: 49.99, image: '../../../assets/images/product/electric/product-09.png', category: 'Electronics', rating: 4, reviews: 100 },
    { id: 10, name: 'HD Camera', price: 49.99, image: '../../../assets/images/product/electric/product-10.png', category: 'Electronics', rating: 4, reviews: 50 },
    { id: 11, name: 'Gaming Controller', price: 50.00, image: '../../../assets/images/product/electric/product-11.png', category: 'Gaming', rating: 4, reviews: 120 },
    { id: 12, name: 'Wall Mount', price: 19.00, image: '../../../assets/images/product/electric/product-12.png', category: 'Accessories', rating: 4, reviews: 30 },
    { id: 13, name: 'Lenevo Laptop', price: 999.99, image: '../../../assets/images/product/electric/product-13.png', category: 'Laptops', rating: 4, reviews: 700 },
    { id: 14, name: 'Juice Grinder Machine', price: 99.00, image: '../../../assets/images/product/electric/product-14.png', category: 'Appliances', rating: 4, reviews: 300 },
    { id: 15, name: 'Wireless Headphone', price: 59.99, image: '../../../assets/images/product/electric/product-15.png', category: 'Electronics', rating: 4, reviews: 100 },
    { id: 16, name: 'Asus Zenbook Laptop', price: 899.00, image: '../../../assets/images/product/electric/product-16.png', category: 'Laptops', rating: 4, reviews: 100 },
    { id: 17, name: 'Demon\'s Souls', price: 30, oldPrice: 40, image: '../../../assets/images/product/electric/product-05.png', category: 'Gaming', rating: 4, reviews: 50 },
    { id: 18, name: 'Google Home', price: 40, oldPrice: 50, image: '../../../assets/images/product/electric/product-06.png', category: 'Smart Home', rating: 4, reviews: 60 },
    { id: 19, name: 'Netfilx Remot', price: 45, oldPrice: 60, image: '../../../assets/images/product/electric/product-07.png', category: 'Electronics', rating: 4, reviews: 70 },
    { id: 20, name: 'Digital Accessories', price: 20, oldPrice: 30, image: '../../../assets/images/product/electric/product-08.png', category: 'Accessories', rating: 4, reviews: 80 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
