import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public listHeaders!: string[];
  //public collectionOrders!: Order[];
  public collection$!: Observable<Order[]>;
  //private sub!: Subscription;
  constructor(private ordersService: OrdersService)
  {

    this.initPage();
  }

  initPage(): void {
    this.listHeaders = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ]
    this.collection$ = this.ordersService.collection;
    //this.sub =
    /*this.ordersService.collection.subscribe((orders: Order[]) => {
      this.collectionOrders = orders;
    });*/
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
