import { Component } from '@angular/core';
import { Observable, Observer, filter, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  val2: number = 0;
  filteredNumbers: number[] = [];
  constructor(private http: HttpClient) { }
  parentMessage = 'Message from parent component';
  date: Date = new Date();
  price : number = 100;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  timeChange = new Observable((observer: Observer<Date>) => {
    setInterval(() => observer.next(new Date()), 1000);
  });
  ngOnInit() {
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
    });
  }
  userData$ : Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/users');
  }

