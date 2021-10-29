import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router, private productService: ProductService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const id = Number(route.paramMap.get('id'));
    // const productsList = this.productService.getProducts();
    // const productExists = productsList.find(product => product.productId === id);
    if (isNaN(id) || id <= 0) {
      alert('Invalid product id provided! Please try again Boss.');
      this.router.navigate(['/products']);
      return false;
    } else {
      return true;
    }
  }
  
}
