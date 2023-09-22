import { Component,Input } from '@angular/core';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AddModalComponent } from './add-modal/add-modal.component';
@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.css']
})
export class CreateNewItemComponent {
  data: any[] = [];
  
  isEdited: boolean = false;
  constructor(private modalService: NgbModal,private http:HttpClient) { } // dependency injection
  ngOnInit() {
    this.getJsonPlaceholder();
  }
  getJsonPlaceholder() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response:any) => {
      this.data = response;
    });
  }
  addCallAhead(){
    const modalRef = this.modalService.open(AddModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = this.data;
    modalRef.componentInstance.saveData.subscribe((res: any) => {
      this.data.push(res);
      modalRef.close();
    });
  }
  onEdit(data: any, index: any) {
    console.log('edit', index);
    const modalRef = this.modalService.open(EditModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.index = index;
    if (modalRef.componentInstance.data) {
      modalRef.componentInstance.isEdited = true;
      modalRef.componentInstance.saveData.subscribe((res: any) => {
        this.data[res.index] = res.data;
        modalRef.close();
      }); 
    
    }
  }
  delete(index: number) {
    console.log('delete', index);
    this.data.splice(index, 1);
  }
 
}
