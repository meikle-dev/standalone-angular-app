import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

export class BaseService {
  protected baseUrl: string;
  constructor(private http: HttpClient, apiBase: string,  baseUrl: string) {
    this.baseUrl = `${apiBase}/${baseUrl}`;
  }

  protected get<T>(endPoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endPoint}`;
    return this.http.get<T>(url).pipe(
      map((response) => {
        return <T>response;
      }),
      catchError(this.handleError)
    );
  }

  protected getExternal<T>(): Observable<T> {
    //THIS IS JUST HERE FOR THE CAT EXAMPLE. YOU WILL LIKELY BE POINTING TO YOURAPI/Controller/Endpoint
    //This is supported by the base setup (the other end points)
    //Ask Ross about how to use this properly
    const url = `${this.baseUrl}`;
    return this.http.get<T>(url).pipe(
      map((response) => {
        return <T>response;
      }),
      catchError(this.handleError)
    );
  }

  protected getBy<T>(endPoint: string, value: any): Observable<T> {
    const url = `${this.baseUrl}/${endPoint}/${value}`;
    return this.http.get<T>(url).pipe(
      map((response) => {
        return <T>response;
      }),
      catchError(this.handleError)
    );
  }

  // POST request
  protected post<T>(endPoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endPoint}`, data).pipe(
      map((response) => {
        return <T>response;
      }),
      catchError(this.handleError)
    );
  }

  // UPDATE request
  protected update<T>(endPoint: string, id: number, data: T): Observable<T> {
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.put<T>(url, data).pipe(
      map((response) => {
        return <T>response;
      }),
      catchError(this.handleError)
    );
  }

  // DELETE request
  protected delete(endPoint: string, id: number): Observable<void> {
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.delete<void>(url).pipe(
      map((response) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  public handleError(err: any) {
    console.log(err);
    if (err.error && err.error.Message) {
      console.log(err.error.Message);
      return throwError(() => err.error.Message);
    }
    return throwError(() => 'An error has occurred');
  }
}
