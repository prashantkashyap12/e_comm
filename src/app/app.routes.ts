import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent:()=> import('./page/home/home.component').then(m => m.HomeComponent)},


    {path: 'contact', loadComponent: () => import('./page/contact/contact.component').then(m => m.ContactComponent)},
    {path: 'about', loadComponent: () => import('./page/aboutus/aboutus.component').then(m => m.AboutusComponent)},
    {path: 'help', loadComponent:()=> import('./page/ehelp/ehelp.component').then(m => m.EhelpComponent)},
    {path: 'faq', loadComponent: () => import('./page/faq/faq.component').then(m => m.FaqComponent)},
    {path: 'privacy', loadComponent: () => import('./page/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)},
    {path: 'refund', loadComponent: () => import('./page/refund-policy/refund-policy.component').then(m => m.RefundPolicyComponent)},
    {path: 'terms', loadComponent: () => import('./page/term-condi/term-condi.component').then(m => m.TermCondiComponent)},
    {path: 'ProductList', loadComponent: () => import('./page/product-list/product-list.component').then(m => m.ProductListComponent)},
    {path: 'ProductList/:category', loadComponent: () => import('./page/product-list/product-list.component').then(m => m.ProductListComponent)},
    {path: 'product/:category/:id', loadComponent: () => import('./page/product-view/product-view.component').then(m => m.ProductViewComponent)},
    {path: 'cart', loadComponent: () => import('./page/cart-calc/cart-calc.component').then(m => m.CartCalcComponent)},
    {path: 'checkout', loadComponent: () => import('./page/check-out/check-out.component').then(m => m.CheckOutComponent)},
    {path: 'wishlist', loadComponent: () => import('./page/wishlist/wishlist.component').then(m => m.WishlistComponent)},

    {path:'PageNotFound', loadComponent: () => import('./common/not-found/not-found.component').then(m => m.NotFoundComponent)},
    {path: '**', redirectTo: 'PageNotFound'}
];
