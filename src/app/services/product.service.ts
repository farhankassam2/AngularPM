import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct, PRODUCT_LIST_MOCK } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serverUrl = 'api/products/products.json';

  private httpOptions = {
    headers: {
      'Content-Type': 'json',
    }
  }

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> { // Observable emits the returned type: array of products, when response is received
    return this.http.get<IProduct[]>(this.serverUrl).pipe(
      tap((products) => console.log('All: ', JSON.stringify(products))),
      catchError(this.handleError)
    );
    // maps response returned from backend service to the defined get type in <>
  }

  //   oldGetProducts(): IProduct[] {
  //   return PRODUCT_LIST_MOCK;
  // }

  getProductDetails(productId: number): IProduct | undefined {
    const foundProduct = PRODUCT_LIST_MOCK.find(product => product.productId == productId);
    return foundProduct;
  }

  private handleError(err: HttpErrorResponse) {
    // handle as appropriate
    // send error message to display to the calling function
    alert(err.message);
    return throwError('Error in product.service.ts: ' + err.message);
  }

}
