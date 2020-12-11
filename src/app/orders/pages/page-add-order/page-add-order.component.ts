import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public order = new Order();
  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
  }

  add(item: Order): void {
    this.ordersService.add(item).subscribe((res: Order) => {
        console.log(res);
        this.router.navigate(['orders']);
    });
  }

}
