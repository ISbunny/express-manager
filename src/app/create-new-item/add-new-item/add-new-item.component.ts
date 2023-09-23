import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
  addItemValue:any[] = [];
  selectedIndexes: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}
  addItem: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl('')
  });
  ngOnInit() {
    this.addItem = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
    });
}
addNotes(formValues: any) {
  if (this.selectedIndexes !== null) {
    const selectedNote = this.addItemValue[this.selectedIndexes];
    const updatedNote = { ...selectedNote, ...formValues };
    this.addItemValue.splice(this.selectedIndexes, 1, updatedNote);
    this.selectedIndexes = null;
  } else {
    this.addItemValue.push(formValues);
  }
  this.addItem.reset();
}
deleteNotes() {
  this.addItemValue.splice(this.selectedIndexes, 1);
  this.selectedIndexes = null;
  this.addItem.reset();
}
selectedNotes(item: any, index:number) {
const itemNote = item.name;
const itemuserName = item.username;
this.selectedIndexes = index;
if (this.selectedIndexes !== null) {

    this.addItem.patchValue({
      name: itemNote,
      username: itemuserName
    });
  } else {
    this.addItem.reset();
  }
  }
}

