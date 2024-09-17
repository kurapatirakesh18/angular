import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private HttpClient:HttpClient) { 

  }

  searchAccount(accountNumber:any):Observable<any>{
    const httpHeaders = {
      headers:new HttpHeaders({
        'accountinput':accountNumber,
        'Content-Type':'application/json',
        'Accept':'application/json'
      })
     };
     return this.HttpClient.get('http://localhost:8080/api/searchAccount',httpHeaders);
   
    }
}
