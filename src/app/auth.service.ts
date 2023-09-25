import { Injectable } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  isLoggerdIn = false;
  login(userName:string,password:string){
    if(userName=="admin" && password=="admin"){
      this.isLoggerdIn = true;
      localStorage.setItem('isLoggerdIn','true');
      return of(this.isLoggerdIn).pipe(delay(1000),tap(val=>console.log("Us User Authentication successfull " + val)));
    }
    return false;
  }

  logout(){
    this.isLoggerdIn = false;
    localStorage.removeItem('isLoggerdIn');
  }
}
