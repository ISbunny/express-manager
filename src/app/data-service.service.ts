import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface User {
  id:number
  name:string;
  email:string;
}
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private emailSource = new BehaviorSubject<string>("");
  createNewOrderObj:any={};
  createNewOrderObjBv= new BehaviorSubject(this.createNewOrderObj);
  currentEmail = this.emailSource.asObservable();
myNewSubject = new Subject<User[]>();
users = new Subject<User[]>();
constructor(private http:HttpClient) { }
getUsers(){
   this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => { 
    this.myNewSubject.next(res);
   }
    );
  }
  getNewUsers(){
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => { 
     this.users.next(res);
    }
     );
   }
  changeEmail(email:string){
    this.emailSource.next(email);
  }
   

}
