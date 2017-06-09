
import { ModelsModule } from './models/models.module';
import { modelsRouting } from './models/models.routing';
import { ArticlesModule } from './articles/articles.module';
import { articlesRouting } from './articles/articles.routing';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesDetailsComponent } from './articles/articles.component';
import { routing } from './app.routing';
import { FooterComponent } from './footer/footer.component';
import { ModelsComponent } from './models/models.component';
import { CartModule } from "app/cart/cart.module";





@NgModule({
  declarations: [
    AppComponent,NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

       ModelsModule,
       modelsRouting,

       ArticlesModule,
       articlesRouting,
       routing, 
      CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

