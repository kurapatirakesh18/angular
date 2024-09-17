import { Component } from '@angular/core';
import { LoansearchService } from '../loansearch.service';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {

  accountNumber:String='';
  constructor(private loansearchService:LoansearchService){

  }

  searchAccount(){
    console.log("input accountNumber" + this.accountNumber);
    this.loansearchService.searchAccount(this.accountNumber).subscribe(data =>{
      console.log(JSON.stringify(data));
    });

  }


}
