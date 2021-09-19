import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }


  getApi(id: any):Observable<any>{
    return this.http.get(`https://localhost:8000/api/projects/${id}`)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )            
  }
  getAllApis():Observable<any>{
    return this.http.get(`https://localhost:8000/api/projects/pages`)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )            
  }
  postApi(projectDto):Observable<any>{
    return this.http.post(`https://localhost:8000/api/projects`,projectDto)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )            
  }
  putApi(projectDto):Observable<any>{
    return this.http.post(`https://localhost:8000/api/projects`,projectDto)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )            
  }
  deleteApi(id: any):Observable<any>{
    return this.http.delete(`https://localhost:8000/api/projects/${id}`)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
     )            
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
