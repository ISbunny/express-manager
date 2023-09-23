import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() data: any;
  @Input() index: any;
  submitted = false;
  @Input() isEdited: boolean = false;
  @Output() saveData = new EventEmitter<{ index: any, data: any }>();
  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) {}
    editForm: FormGroup = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl('')
    });
  
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required]
    });
    console.log('editdata',this.data);
    this.editForm.patchValue(this.data);
  }
  saveChanges() {
    this.submitted = true;
    if(this.editForm.invalid){
      this.isEdited = false;
      return;
    }
    const duplicateCustomer = this.filterDuplicateCustomer();
    if (duplicateCustomer.length > 0) {
      alert('Customer already exists');
      return;
    }
    const formValues = { ...this.editForm.value, id: this.data.id };
    this.saveData.emit({ index: this.index, data: formValues });
    this.editForm.reset();

  }
  filterDuplicateCustomer() {
    const formValues = this.editForm.value;
    if(!Array.isArray(this.data)){
      return [];
    }
    return this.data.filter((item: any) => {
      return Object.keys(formValues).every(key => {
        return item[key] === formValues[key];
      });
    });
  }
  closeModel() {
    this.modalService.dismissAll();
  }
  get inputValidation(): { [key: string]: AbstractControl } {
 return this.editForm.controls;

  }
}
