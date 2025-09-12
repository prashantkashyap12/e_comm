import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../tools/interface/product.interface';
import { ProductService } from '../../tools/service/product.service';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';
  sortOption: string = 'name';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages: number = 0;
  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.categories = [...new Set(this.products.map(p => p.category))];
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === '' || p.category === this.selectedCategory)
    );
    // sort
    if (this.sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortOption === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    this.filteredProducts = filtered;
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.currentPage = 1;
    this.paginate();
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(start, end);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilter(): void {
    this.applyFilters();
  }

  onSort(): void {
    this.applyFilters();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.paginate();
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }



  
}
