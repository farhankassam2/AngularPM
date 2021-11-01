import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProduct, PRODUCT_LIST_MOCK } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  
  createDb() {
    const products: IProduct[] = PRODUCT_LIST_MOCK;
    return { products };
  }

  
    /*
     * Overrides the genId method to ensure that a product always has a unique alpha-numeric Id.
     */
  genId(products: IProduct[]): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
