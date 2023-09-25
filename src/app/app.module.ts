import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomDirectivesDirective } from './custom-directives.directive';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { CreateNewItemComponent } from './create-new-item/create-new-item.component';
import { AddModalComponent } from './create-new-item/add-modal/add-modal.component';
import { EditModalComponent } from './create-new-item/edit-modal/edit-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AddNewItemComponent } from './create-new-item/add-new-item/add-new-item.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    CustomDirectivesDirective,
    TestComponent,
    ChildComponent,
    ExpenseEntryListComponent,
    CreateNewItemComponent,
    AddModalComponent,
    EditModalComponent,
    AddNewItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
