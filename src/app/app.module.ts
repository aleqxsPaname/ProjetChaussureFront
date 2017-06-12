//import { SearchModule } from './search/search.module';
//import { searchRouting } from './search/search.routing';
import { RegisterModule } from './register/register.module';
import { RegisterComponent } from './register/register.component';
import { registerRouting } from './register/register.routing';
import { LoginModule } from './login/login.module';
import { loginRouting } from './login/login.routing';


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


// tslint:disable-next-line:whitespace
import { CollapseModule } from 'ngx-bootstrap';
import { SearchComponent } from './search/search.component';






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

    CollapseModule,

       ModelsModule,
       modelsRouting,



       ArticlesModule,
       articlesRouting,

       LoginModule,
      loginRouting,

      RegisterModule,
      registerRouting,

     



       routing, 
      CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

