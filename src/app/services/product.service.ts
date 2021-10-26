import { Injectable } from '@angular/core';
import { IProduct, PRODUCT_LIST_MOCK } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): IProduct[] {
    return PRODUCT_LIST_MOCK;
  }

  getProductDetails(): IProduct {
    return PRODUCT_LIST_MOCK[0];
  }

}