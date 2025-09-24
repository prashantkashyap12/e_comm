import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductView } from '../../tools/interface/product/productView';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DbProductService } from '../../tools/service/db-product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers:[DbProductService],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  constructor(private _router:ActivatedRoute, private _dbProductService: DbProductService) { }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.showProduct();
  }

  product: ProductView = {
    title: '3D™ wireless headset',
    price: '$155.00 - $255.00',
    stock: true,
    delivery: true,
    discountText: 'Sales 30% Off Use Code: MOTIVE30',
    description: 'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna.',
    images: [
      { large: '../../../assets/images/product/product-big-01.png', thumb: '../../../assets/images/product/product-thumb/thumb-08.png' },
      { large: '../../../assets/images/product/product-big-02.png', thumb: '../../../assets/images/product/product-thumb/thumb-07.png' },
      { large: '../../../assets/images/product/product-big-03.png', thumb: '../../../assets/images/product/product-thumb/thumb-09.png' },
      { large: '../../../assets/images/product/product-big-02.png', thumb: '../../../assets/images/product/product-thumb/thumb-07.png' },
    ],
    colors: ['#000000', '#ff0000', '#0000ff'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    Description:[
      {
        specification:'We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.',
        careMantains:'Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.'
      }
    ],
    OtherInfo: [
      {
        Standup:'35″L x 24″W x 37-45″H(front to back wheel)',
        FoldedWI:'32.5″L x 18.5″W x 16.5″H',
        FoldedWO:'32.5″L x 24″W x 18.5″H',
        DoorPass:'24',
        Frame:'Aluminum', 
        weight:'20Kg', 
        weightCapacity:'60Kg',
        Width:'24″',
        HandleHeight:'37-45″', 
        wheels:'Aluminum', 
        size:'S, M, X, XL'
      }
    ],
    reviews: [
      { name: 'John Doe', rating: 4, comment: 'Great product!', avatar: '../../../assets/images/testimonial/avater-01.png' },
      { name: 'Jane Smith', rating: 5, comment: 'Exceeded my expectations.', avatar: '../../../assets/images/testimonial/avater-02.png' },
      { name: 'Alice Johnson', rating: 3, comment: 'Good value for the price.', avatar: '../../../assets/images/testimonial/avater-03.png' }
    ]
  };


  itemProduct:any;
  itemproductlist:any[]=[];
  showProduct(){
      this._dbProductService.getCategories().subscribe(res=>{
      const allData=res;  
      console.log(allData);
      this._router.params.subscribe((params:any) => {
        const productLs = allData.categories.filter((item:any)=>item.name==params['category']);
        this.itemproductlist= productLs[0].products.filter((a:any)=>a.id !=='apple004');
        console.log(this.itemproductlist);
        if(productLs.length>0 && productLs[0].products){
          const prodList=productLs[0].products;
          const productItem = prodList.filter((it:any)=>it.id==params['id']);
          if(productItem.length>0){
            this.itemProduct=productItem[0];
            console.log(this.itemProduct);
          }
        }else{
          this.itemProduct=null;
          console.log('No products found for this category');
        }
     });
   });
  }

  addToWishlist(prod:any){
    sessionStorage.setItem('WishList', JSON.stringify([...JSON.parse(sessionStorage.getItem('WishList') || '[]'), prod]));
    alert('Product added to wishlist');
  }

  addtoCart(cartId: string) {
    sessionStorage.setItem('CartList', JSON.stringify([...JSON.parse(sessionStorage.getItem('CartList') || '[]'), cartId]));
    alert('Product added to cart');
  }

}
