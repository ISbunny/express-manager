import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {
  @Input() data: any;
  index: any;
  @Input() isEdited: boolean = false;
  submitted = false;
  @Output() saveData = new EventEmitter<{ index: any, data: any }>();
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }
  addForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl('')
  });
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required]
    });
    console.log('add modal data in add-modal-component', this.data);
  }
  saveCustomer() {
    this.submitted = true;
    if (this.addForm.invalid) {
      this.isEdited = false;
      return;
    }
    const formValues = { ...this.addForm.value, id: this.getTheLastId() + 1 };
    const duplicateCustomer = this.filterDuplicateCustomer();
    if (duplicateCustomer.length > 0) {
      alert('Customer already exists');
      return;
    }
    this.saveData.emit(formValues);
    this.addForm.reset();

  }
  closeModel() {
    this.modalService.dismissAll();
  }
  get inputValidation(): { [key: string]: AbstractControl } {
    return this.addForm.controls;
  }
  filterDuplicateCustomer() {
    const formValues = this.addForm.value;
    return this.data.filter((item: any) => {
      return (
        item.name.toLowerCase() == formValues.name.toLowerCase() ||
        item.username.toLowerCase() == formValues.username.toLowerCase() ||
        item.email.toLowerCase() == formValues.email.toLowerCase() ||
        item.phone == formValues.phone ||
        item.website.toLowerCase() == formValues.website.toLowerCase()
      );
    });
  }
  
  getTheLastId() {
    return this.data[this.data.length - 1].id;
  }
}
