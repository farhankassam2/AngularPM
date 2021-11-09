import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct, PRODUCT_LIST_MOCK } from '../types/product';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private serverUrl = '/api/products/products.json';
  private serverUrl = 'api/products'

  private httpHeader: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private toastr: ToastrService) { }

  getProducts(): Observable<IProduct[]> { // Observable emits the returned type: array of products, when response is received
    return this.http.get<IProduct[]>(this.serverUrl).pipe( // <IProduct[]> maps response from server to defined interface
      tap((products) => {
        console.log('All products fetched: ', JSON.stringify(products));
      }),
      catchError((err) => this.errorHandler.handleError(err, 'getProducts')),
    );
    // maps response returned from backend service to the defined get type of <IProduct[]>
  }

  //   oldGetProducts(): IProduct[] {
  //   return PRODUCT_LIST_MOCK;
  // }

  getProductDetails(id: string): Observable<IProduct | undefined> {
    // const foundProduct = PRODUCT_LIST_MOCK.find(product => product.productId == productId);
    // return foundProduct;
    const url = `${this.serverUrl}/${id}`;
    return this.http.get<IProduct>(url).pipe(
      tap(product => console.log('Requested product detail: ', JSON.stringify(product))), // this is an RxJS Operator
      catchError(err => this.errorHandler.handleError(err, 'getProductDetails')) // this is an RxJS Operator too
    ); // RxJS operators are used all within pipes
  }

  deleteProduct(id: string): Observable<void> {
      const url = `${this.serverUrl}/${id}`;
    return this.http.delete<void>(url, { headers: this.httpHeader }).pipe(
      tap(() => console.log('Deleted the selected product with id: ' + id)),
      catchError(err => this.errorHandler.handleError(err, 'deleteProduct'))
    );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.serverUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product, { headers: this.httpHeader }).pipe(
      tap((product: IProduct) => console.log(`Updated product with id: ${product.id} : `, JSON.stringify(product))),
      map((product: IProduct) => product), // applies a function that parses/manipulates the returned response
      catchError(err => this.errorHandler.handleError(err, 'updateProduct'))
    );
  }
  // map transforms/manipulates the response result into some other value of your choice and returns a new Observable with those values
  // to the caller function. Therefore, it allows parsing results as need be before returning the response from API to the caller.

  createProduct(product: IProduct): Observable<IProduct> {
    product.id != null;
    return this.http.post<IProduct>(this.serverUrl, product, { headers: this.httpHeader }).pipe(
      tap((product) => console.log(`Created a new product with id: ${product.id} : `, JSON.stringify(product))),
      map(product => product),
      catchError(err => this.errorHandler.handleError(err, 'createProduct')),
    );
  }

}
