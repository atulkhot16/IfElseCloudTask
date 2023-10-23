import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { GraphsComponent } from './dashboard/graphs/graphs.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { MyCardsComponent } from './dashboard/my-cards/my-cards.component';
import { TransferComponent } from './dashboard/transfer/transfer.component';
import { DoughnutGraphComponent } from './dashboard/graphs/doughnut-graph/doughnut-graph.component';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    GraphsComponent,
    TransactionsComponent,
    MyCardsComponent,
    TransferComponent,
    DoughnutGraphComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    ChartModule,
    TableModule,
    HttpClientModule
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
