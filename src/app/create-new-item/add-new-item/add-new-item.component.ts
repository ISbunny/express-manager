import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChildComponent } from 'src/app/child/child.component';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
  sendData$: Observable<string>;
  addItemValue: any[] = [];
  selectedIndexes: any;
  duplicateNote: string = '';
  isAddNotesDisabled: boolean = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,private childComponent: ChildComponent) {
    this.sendData$ = this.childComponent.sendDataSubject.asObservable();
   }
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
    const duplicateNote = this.addItemValue.find((note) => note.name === formValues.name && note.username === formValues.username);
    const duplicateNoteElement = document.getElementById('duplicateNote');
    if (this.selectedIndexes !== null) {
      const selectedNote = this.addItemValue[this.selectedIndexes];
      const updatedNote = { ...selectedNote, ...formValues };
      this.addItemValue.splice(this.selectedIndexes, 1, updatedNote);
      this.selectedIndexes = null;
    } else if (duplicateNote && duplicateNoteElement !== null) {
      duplicateNoteElement.innerHTML = 'Note already exists';
      this.addItem = formValues;
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
  selectedNotes(item: any, index: number) {
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

