import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public testObservable = new Observable((sujets) => {
    sujets.next([{name: 'Johan', age: 28}, {name: 'Kevin', age: 32}, {name: 'Pierre', age: 31}]);
  });
  private urlApi = environment.urlApi;
  private pCollection: Observable<Order[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      catchError(this.handleError)
    );
  }
  // get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }
  // changeState of item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }
  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
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
