import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collectionOrders!: Order[];

  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((orders: Order[]) => {
      console.log(orders);
      this.collectionOrders = orders;
    });
  }

  ngOnInit(): void {
  }

}
