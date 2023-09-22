import { Component, ElementRef, NgModule } from '@angular/core';
import { ExpressEntry } from '../express-entry';
import { CustomDirectivesDirective } from '../custom-directives.directive';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent {
  title!: string;
  expressEntry!: ExpressEntry;
  userName!: string;
  isLoggedin: boolean = false;
  isLoggedOut: boolean = true;
  list = [1, 5, 6, 7, 8, 9, 10];
  studentArray: any[] = [
    { name: 'Raj', age: 20,id:1 },
    { name: 'Ravi', age: 21,id:2 },
    { name: 'Rahul', age: 22,id:3 }];
trackByStudentId(index: number, student: any): number {
  return student.id;
}
loginName= "admin"
  constructor(private el:ElementRef) { }
  ngOnInit() {
    this.title = 'Expense Entry';
    this.expressEntry = {
      id: 1,
      item: "Pizza",
      amount: 21,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    };
    // this.addNewElementToDom();
  }
  showData($event: any) {
    if ($event) {
      console.log($event.target.value);
      console.log($event.target);
    }
  }
  onClick() {
    const directive = new CustomDirectivesDirective(this.el);
    directive.onClicked();
    directive.addNewElementToDom();
    
  }
  addNewElementToDom(){
    const directive = new CustomDirectivesDirective(this.el);
    directive.addNewElementToDom();
  }
}
