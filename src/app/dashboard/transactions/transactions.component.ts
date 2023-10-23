import { Component, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TableModule } from 'primeng/table';
import { Subject, map, takeUntil } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  transactionObs$ = new Subject();
  constructor(private dataServ: DataService) { }
  transactionArr: any[] = [];
  ngOnInit(): void {
    this.dataServ.getTransactions().pipe(takeUntil(this.transactionObs$)).subscribe(
      {
        next: ((data: any) => {
          let recievedData = data.map((obj: any) => {
            let dateObj = obj.registered;
            let dateExtracted = dateObj.slice(0, 10);
            let timeExtracted = dateObj.slice(11, 19);
            let newObj = {
              guid: obj.guid,
              balance: obj.balance,
              picture: obj.picture,
              status: obj.status,
              name: obj.name,
              company: obj.company,
              time: timeExtracted,
              date: dateExtracted
            }
            return newObj
          })
          this.transactionArr = recievedData;
        }),
        error: ((err: any) => { console.log(err) })
      })
  }
  ngOnDestroy(): void {
    this.transactionObs$.next(''),
      this.transactionObs$.complete()
  }
}

