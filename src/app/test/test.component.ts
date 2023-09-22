import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  parentMessage = 'Message from parent component';
  date: Date = new Date();
  price : number = 100;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  timeChange = new Observable((observer: Observer<Date>) => {
    setInterval(() => observer.next(new Date()), 1000);
  });
}
