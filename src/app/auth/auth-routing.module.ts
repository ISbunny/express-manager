import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  // Default route for auth module
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Login route
  { path: 'login', component: LoginComponent },
  // Add other auth-related routes as needed
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
