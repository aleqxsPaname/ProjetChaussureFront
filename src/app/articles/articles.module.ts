

import { ArticlesDetailsComponent } from './articles.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ServiceArticle } from './../services/article.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
  
    
  ],
  declarations: [
    ArticlesDetailsComponent,
   
],
  exports: [
    ArticlesDetailsComponent
  ],
  providers: [
     ServiceArticle
  ],
  
})
export class ArticlesModule { }
