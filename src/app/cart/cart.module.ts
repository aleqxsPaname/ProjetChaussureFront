



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ServiceArticle } from './../services/article.service';
import { CartComponent } from "app/cart/cart.component";
import { CartService } from "app/services/cart.service";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
  
    
  ],
  declarations: [
    CartComponent
   
],
  exports: [
    CartComponent
  ],
  providers: [
     CartService
  ],
  
})
export class CartModule { }
