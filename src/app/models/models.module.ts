
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModelsComponent } from './models.component';
import { ServiceModel } from './../services/model.service';


import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    PaginationModule.forRoot()
    
  ],
  declarations: [
    ModelsComponent,
   
],
  exports: [
    ModelsComponent
  ],
  providers: [
    ServiceModel
  ],
  
})
export class ModelsModule { }
