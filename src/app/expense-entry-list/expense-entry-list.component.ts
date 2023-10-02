import { Component,OnInit, OnDestroy } from '@angular/core';
import { ExpressEntry } from '../express-entry';
import { DataServiceService } from '../data-service.service';
import { Observable, Subscription } from 'rxjs';
// import { Subject } from 'rxjs';
@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css']
})
export class ExpenseEntryListComponent implements OnInit,OnDestroy {
  title!: string;
  expenseEntries: ExpressEntry[] = [];
  myObservable!: Observable<string>;
  mySubscription!: Subscription;
  message!: string;
  // mysubjectNew = new Subject<string>();
  recivedData!: Subscription;
  getExpenseEntries(): ExpressEntry[] {
    let mockExpenseEntries: ExpressEntry[] = [
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "Mcdonald",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
      {
        id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1),
        category: "Food",
        location: "KFC",
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10),
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10)
      },
    ];
    return mockExpenseEntries;
  }
 
  constructor(private dataService:DataServiceService) { }
  ngOnInit() {
    this.myObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next('Hello World!');
      }, 1000);
    });

    this.mySubscription = this.myObservable.subscribe(message => {
      this.message = message;
      console.log('message',message);
      
    });
    this.title = "Expense Entries";
    this.getexpenseentries();
    // this.dataService.getUsersObservable().subscribe((res:any) => {
    //   console.log('resdataService',res);
    // });
    this.dataService.myNewSubject.subscribe((res:any) => {
      console.log('resdataService',res);
      this.recivedData = res;
      if(this.recivedData){
        this.dataService.createNewOrderObjBv.next(this.recivedData);
      }
    });
  
}
ngOnDestroy() {
  this.mySubscription.unsubscribe();
  console.log('users subscription closed:', this.mySubscription.closed);
}
ngAfterViewInit() {
  this.dataService.createNewOrderObjBv.subscribe((res:any) => {
    console.log('resBehaviour',res);
  });// console.log('details',this.details);
} 
getexpenseentries() {
  this.expenseEntries = this.getExpenseEntries();
}
getAlert() {  
  alert('Hello');  
}



}
