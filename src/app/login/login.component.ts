import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName!: string;
  password!: string;
  formData!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }

  onClickSubmit(data: any) {
    console.log(data);
    this.userName = data.userName;
    this.password = data.password;
    if (this.authService.login(this.userName, this.password)) {
      // this.router.navigate(['dashboard']);
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  }
}
