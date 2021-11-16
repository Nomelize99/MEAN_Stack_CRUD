import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class product {
  _id!: String;
  name!: String;
  price!: Number;
  detail!: String;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string = 'http://localhost:4000/api/product';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private httpClient:HttpClient) { }

  AddProduct(data: product): Observable<any> {
    let API_URL = `${this.REST_API}/add`;
    return this.httpClient.post(API_URL, data)
    .pipe(catchError(this.handleError))
  }

  GetProducts(){
    return this.httpClient.get(`${this.REST_API}`);
  }

  GetProduct(id: any): Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL,{headers: this.httpHeaders })
    .pipe(map((res:any) => {
      return res || {}
    }),
       catchError(this.handleError)
    )
  }
  EditProduct(id:any,data:any): Observable<any>{
    let API_URL = `${this.REST_API}/edit/${id}`
    return this.httpClient.put(API_URL,data,{headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }
  DeleteProduct(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/delete/${id}`
    return this.httpClient.delete(API_URL,{ headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
        errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage);
  }

}
