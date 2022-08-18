import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { catchError,Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDServiceService {


  apiUrl: string = 'http://localhost:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  listProducts()
  {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }

  listProductsByOffer()
  {
    return this.http.get<any>(`${this.apiUrl}/products/offers`);
  }

  listProductsByBestSellers()
  {
    return this.http.get<any>(`${this.apiUrl}/products/bestSellers`);
  }

  listProductByCategory(category:string)
  {
    return this.http.get<any>(`${this.apiUrl}/products/${category}`);
  }

  updateAvailable(product:any,id:number): Observable<any>
  {
    let API_URL = `${this.apiUrl}/products/available/${id}`;
    return this.http.put(API_URL, product,{ headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

  update(product:any,id:number): Observable<any>
  {
    
    let API_URL = `${this.apiUrl}/products/update/${id}`;
    return this.http.put(API_URL, product,{ headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }


  create(product:any): Observable<any> {
    
    {
      let API_URL = `${this.apiUrl}/products`;
      return this.http.post(API_URL, product)
        .pipe(
         catchError(this.handleError)
      )
    }
    
  }

  delete(id: number): Observable<any> {
    var API_URL = `${this.apiUrl}/products/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }


  getUser(emailId:string,password:string) {
   
    return this.http.get<any>(`${this.apiUrl}/login?emailId=${emailId}&password=${password}`);
  }

  createUser(user:any): Observable<any> 
  {
    let API_URL = `${this.apiUrl}/login/signup`;
     return this.http.post(API_URL, user)
      .pipe(
       catchError(this.handleError)
      )
  }

  createOrder(order:any): Observable<any> 
    {
      let API_URL = `${this.apiUrl}/orders`;
      return this.http.post(API_URL, order)
        .pipe(
         catchError(this.handleError)
      )
    }
  
  listOrders()
  {
    return this.http.get<any>(`${this.apiUrl}/orders`);
  }

  search(input:string)
  {
    return this.http.get<any>(`${this.apiUrl}/products/search?q=${input}`);
  }


  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
  
}
