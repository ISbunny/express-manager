import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DataServiceService } from '../data-service.service';
import { AboutComponent } from './about/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [DataServiceService]
})
export class HomeModule { }
