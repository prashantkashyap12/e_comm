import { ProductDiscript } from "./ProductDiscript";
import { ProductImages } from "./ProductImages"; 
import { ProductOtherInfo } from "./ProductOtherInfo";
import { ProductReview } from "./ProductReview";

export interface ProductView {
  title: string;
  price: string;
  stock: boolean;
  delivery: boolean;
  discountText: string;
  description: string;
  images: ProductImages[];
  colors: string[];
  sizes: string[];
  Description: ProductDiscript[];
  OtherInfo: ProductOtherInfo[];
  reviews: ProductReview[];
}