import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() childMessage!: string;
@Output() sendData = new EventEmitter<string>();
public sendDataSubject = new Subject<string>();
  constructor() { }
  ngOnInit(): void {
    // this.sendData.emit('Hello from child');
  }
  sendMessage() {
    const data = 'Hello from child';
    this.sendData.emit(data);
    this.sendDataSubject.next(data);
  }
}
