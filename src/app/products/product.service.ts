import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = '/api/products/products.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof Error) {
      errMsg = `An error occured: ${err.error.message}`;
    } else {
      errMsg =
        `Backend returned code ${err.status}, ` +
        ` body was: ${err.error} ` +
        `error message is : ${err.message}`;
    }
    console.error(errMsg);
    return throwError(() => errMsg);
  }
}
