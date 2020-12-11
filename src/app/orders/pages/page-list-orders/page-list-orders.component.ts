import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
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
  public states: any;
  constructor(private ordersService: OrdersService, private changeDetectorRef: ChangeDetectorRef)
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
    this.states = Object.values(StateOrder);
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

  changeState(item: any, $event: any): void {
    const state = $event.target.value;
    this.ordersService.changeState(item, state).subscribe((order: Order) => {
      item.state = order.state;
      this.changeDetectorRef.detectChanges();
    });
  }
}
