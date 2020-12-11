import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = http.get<Order[]>(this.urlApi + '/orders');
  }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    const obj2 = Object.assign({}, item);
    obj.state = state;
    obj.state = state;
    return this.update(obj);
  }

  update(item: Order): Observable<Order> {
    return this.http.put<Order>(this.urlApi + '/orders/' + item.id, item);
  }

  add(order: Order): Observable<Order> {
    return this.http.post<Order>(this.urlApi + '/orders',order);
  }
}
