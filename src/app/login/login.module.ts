import { LoginComponent } from './login.component';
import { AuthenticationService } from './../services/authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
  
    
  ],
  declarations: [
    LoginComponent,
   
],
  exports: [
    LoginComponent
  ],
  providers: [
     AuthenticationService
  ],
  
})
export class LoginModule { }
