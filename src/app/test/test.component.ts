import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Observer, Subject, filter, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';
import { ExpenseEntryListComponent } from '../expense-entry-list/expense-entry-list.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
// i wan to use a subject below in mysubject i want to use this url 'https://jsonplaceholder.typicode.com/users'

mysubject = new Subject<string>();
// mysubjectNew = new Subject<string>();
@ViewChild(ExpenseEntryListComponent) componentValue?: ExpenseEntryListComponent;
// inputText:any;
  val2: number = 0;
  email: string = '';
  filteredNumbers: number[] = [];
  constructor(private http: HttpClient,private dataService:DataServiceService) { }
  parentMessage = 'Message from parent component';
  // sendData: Observable<any> | undefined;
  userdata: any;
  date: Date = new Date();
  price : number = 100;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  timeChange = new Observable((observer: Observer<Date>) => {
    setInterval(() => observer.next(new Date()), 1000);
  });
  ngOnInit() {
    this.dataService.createNewOrderObjBv.subscribe((res:any) => {
      console.log('resBehaviour',res);
    });
    this.dataService.users.subscribe((res:any) => {
      console.log('refsdfsdfsfs',res);
    });
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.mysubject.next(res);
    }
    );
    this.mysubject.subscribe((res: any) => {
      console.log('resSubject', res);
    });
  this.practice();
    const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const filterFn = filter( (num : number) => num > 5 ); 
const filteredNumbers$ = filterFn(numbers$); 
filteredNumbers$.subscribe( (num : number) => { 
this.filteredNumbers.push(num); this.val2 += num } );
console.log('filteredNumbers',this.filteredNumbers);
    

const num$ = from([1, 2, 3, 4, 5]);
    const observer = {
      next: (x:any) => console.log('Observer got a next value: ' + x),
      error: (err:string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    console.log('just before subscribe');
    num$.subscribe(observer);
    console.log('just after subscribe');
    this.userData$.subscribe((res:any) => {
      console.log('obsercvable',res);
      this.userdata = res;
    });
  }
  userData$ : Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/users');
  sendMessage(data: string) {
    console.log('data',data);
  }
  // i want to destroy the userData$ observable
  ngOnDestroy() {
    this.userdata.unsubscribe();
  }
  // i want to destry mysubject
  ngOnDestroy1() {
    this.mysubject.unsubscribe();
  }
 

//   
practice() {
  let names = ['sonu','rohit','akash','sonam','rohan','Sagar']
const filteredUsers = names.filter(name=>name.startsWith('s'));
const findUsers = names.find(name=>name.startsWith('s'));
console.log('filteredUsers',filteredUsers);
console.log('findUsers',findUsers);
}
ngAfterViewInit() {
  // Access the ViewChild here
  this.sendData();
}

sendData() {
  console.log('sendData');
  this.dataService.getUsers();
  
  // const expense = this.myname.nativeElement.value;
  // console.log('expense',expense);
  if (this.componentValue) {
    const entry = this.componentValue.getAlert();
    console.log('entry', entry);
  } else {
    console.error('ExpenseEntryListComponent not found');
  }
}
updateEmail() {
  const emails = this.dataService.changeEmail(this.email);
  console.log('emailssssssssssssssss',emails);
  
}

}
