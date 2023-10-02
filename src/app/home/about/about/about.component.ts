import { AfterViewInit, Component,ElementRef,ViewChild } from '@angular/core';
import { HomeComponent } from '../../home.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  constructor() { }

details:any;
  ngOnInit() {

  }
  ngAfterViewInit() {
    console.log('details',this.details);
  }
}
