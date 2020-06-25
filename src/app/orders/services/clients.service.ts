import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  public testObservable = new Observable((sujets) => {
    sujets.next([{name: 'Johan', age: 28}, {name: 'Kevin', age: 32}, {name: 'Pierre', age: 31}]);
  });
  private urlApi = environment.urlApi;
  private pCollection: Observable<Client[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      catchError(this.handleError)
    );
  }
  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
  // changeState of item
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }
  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }
  // add item in collection
  // delete item in collection
  // get item by id in collection
  // gestion http errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
