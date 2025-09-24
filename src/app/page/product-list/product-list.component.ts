import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DbProductService } from '../../tools/service/db-product.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers:[DbProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private _dbProductService: DbProductService, private _router: ActivatedRoute, private route:Router) {  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.extractCategories();
    this.findList();
  }

  // get list from database
  alldata:any;
  extractCategories(){
    this._dbProductService.getCategories().subscribe(res=>{
      this.alldata=res;
      this.findList()
    });
    // console.log(this.alldata);
  }
  
  // filter list according to category
  produtList:any;
  findList(){
    this._router.params.subscribe((params:any) => {
      const productLs = this.alldata.categories.filter((item:any)=>item.name==params['category']);
      if(productLs.length>0 && productLs[0].products){
        this.produtList=productLs[0].products;
        // console.log(this.produtList);
      }else{
        this.produtList=[];
        console.log('No products found for this category');
      }
    });
  }

  onChange(event:any){
    this.route.navigate(['/ProductList', event.target.value]);
  }

  // Wishlist function
  addToWishlist(productId: string) {
    sessionStorage.setItem('WishList', JSON.stringify([...JSON.parse(sessionStorage.getItem('WishList') || '[]'), productId]));
    alert('Product added to wishlist');
  }

  // Add to cart function
  addtoCart(cartId: string) {
    sessionStorage.setItem('CartList', JSON.stringify([...JSON.parse(sessionStorage.getItem('CartList') || '[]'), cartId]));
    alert('Product added to cart');
  }

}
