import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  // login() {
    
  //   // Perform login logic here
  //   const token = 'admin';

  //   // Set token in local storage
  //   localStorage.setItem('admin', token);

  //   // Navigate to home page
  //   this.router.navigate(['/home']);
  // }

}
