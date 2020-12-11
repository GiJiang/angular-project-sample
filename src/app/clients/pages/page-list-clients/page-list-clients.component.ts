import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {


  public listHeaders!: string[];
  //public collectionOrders!: Order[];
  public collection$!: Observable<Client[]>;
  //private sub!: Subscription;
  public states: any;
  constructor(private clientsService: ClientsService, private changeDetectorRef: ChangeDetectorRef)
  {
    this.initPage();
  }

  initPage(): void {
    this.listHeaders = [
      'Name',
      'Comment',
      'Total CA HT',
      'TVA',
      'State'
    ]
    this.states = Object.values(StateClient);
    this.collection$ = this.clientsService.collection;
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
    this.clientsService.changeState(item, state).subscribe((order: Client) => {
      item.state = order.state;
      this.changeDetectorRef.detectChanges();
    });
  }

}
