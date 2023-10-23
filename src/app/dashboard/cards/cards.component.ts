import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  balanceObs$ = new Subject();
  currentBalArr: any = [];
  constructor(private dataServ: DataService) { }
  ngOnInit(): void {
    this.dataServ.getCurrentBal().pipe(takeUntil(this.balanceObs$)).subscribe(
      {
        next: ((data) => { this.currentBalArr.push(data) }),
        error: ((err: any) => { console.log(err.message.message) })
      }
    )
  }
  ngOnDestroy(): void {
    this.balanceObs$.next('');
    this.balanceObs$.complete()
  }
}
