import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class DataService{
    static currentBalUrl = "https://1.api.fy23ey01.careers.ifelsecloud.com/";
    static transactionUrl = "https://2.api.fy23ey01.careers.ifelsecloud.com/";
    constructor(private http : HttpClient){}
    getCurrentBal(){
        return this.http.get(DataService.currentBalUrl)
    }
    getTransactions(){
       return this.http.get(DataService.transactionUrl)
    }
}
