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
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }
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
    console.log('editdata', this.data);
    this.editForm.patchValue(this.data);
  }
  saveChanges() {
    this.submitted = true;
    if (this.editForm.invalid) {
      this.isEdited = false;
      return;
    }
    const formValues = this.editForm.value;
    const duplicateCustomer = this.filterDuplicateCustomer();
    if (duplicateCustomer.length > 0) {
      alert('Customer already exists');
      return;
    }
    const index = this.data.findIndex((item: any) => item.id === formValues.id);

    this.data[index] = formValues; // Update the existing data with the new form values
    this.saveData.emit({ index: index, data: formValues });
    this.editForm.reset();
  }
  filterDuplicateCustomer() {
    debugger
    const formValues = this.editForm.value;
    if (!Array.isArray(this.data)) {
      return this.data = [this.data];
    }
    const index = this.data.findIndex((item: any) => item.id == this.data.id);
    return this.data.reduce((acc: any, item: any) => {
      if (item.username === formValues.username && item.email === formValues.email && item.index !== index) {
        acc.push(item);
      }
      return acc;
    }, []);
  }

  closeModel() {
    this.modalService.dismissAll();
  }
  get inputValidation(): { [key: string]: AbstractControl } {
    return this.editForm.controls;

  }
}
