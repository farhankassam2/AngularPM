import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct, PRODUCT_LIST_MOCK } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private serverUrl = '/api/products/products.json';
  private serverUrl = 'api/products'

  private httpOptions = {
    headers: {
      'Content-Type': 'json',
    }
  }

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> { // Observable emits the returned type: array of products, when response is received
    return this.http.get<IProduct[]>(this.serverUrl, this.httpOptions).pipe( // <IProduct[]> maps response from server to defined interface
      tap((products) => console.log('All: ', JSON.stringify(products))),
      catchError((err) => this.handleError(err, 'getProducts'))
    );
    // maps response returned from backend service to the defined get type of <IProduct[]>
  }

  //   oldGetProducts(): IProduct[] {
  //   return PRODUCT_LIST_MOCK;
  // }

  getProductDetails(productId: string): Observable<IProduct | undefined> {
    // const foundProduct = PRODUCT_LIST_MOCK.find(product => product.productId == productId);
    // return foundProduct;
    const url = `${this.serverUrl}/${productId}`;
    return this.http.get<IProduct>(url).pipe(
      tap(product => console.log('Requested product detail: ', JSON.stringify(product))),
      catchError(err => this.handleError(err, 'getProductDetails'))
    );
  }

  private handleError(err: HttpErrorResponse, callerFunction: string) {
    // handle as appropriate
    // send error message to display to the calling function 
    const finalErrorMessage = 'Error during call to ' + callerFunction + ': ' + err.message;
    alert(finalErrorMessage);
    return throwError(finalErrorMessage);
  }

}
