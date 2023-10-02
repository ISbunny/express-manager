import { Component, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';
import { AboutComponent } from './about/about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: any
  usersSubscription!:Subscription;
  @ViewChild('emailRef') emailRef!: any;
  constructor(private dataService: DataServiceService,private router:Router) { }
  ngOnInit() {
    
    this.usersSubscription = this.dataService.users.subscribe(users => {
      this.users = users;
      console.log('users', users);

    });
  }
  recivedData(event: any) {
    this.dataService.getNewUsers();
    // this.router.navigate(['/home/about']);
    const value = this.emailRef.nativeElement.value;
    console.log('value', value);
    
    // AboutComponent.prototype.details = email;
    event.preventDefault();
  }
  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
    console.log('users subscription closed:', this.usersSubscription.closed);
  }
  example() {
    console.log('example');
  }


}


