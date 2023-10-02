import { Component,Input,Output,EventEmitter,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy {
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
  ngOnDestroy(): void {
    // this.recivedData.unsubscribe();
    this.sendDataSubject.unsubscribe();
    console.log('Child component destroyed',this.sendDataSubject.closed);
  }
}
