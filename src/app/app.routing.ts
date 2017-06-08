import { ArticlesDetailsComponent } from './articles/articles.component';
import { ModelsComponent } from './models/models.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, },
  { path: 'not-found', component: NotFoundComponent },
 // { path: 'articles', pathMatch: 'full', component: ArticlesDetailsComponent },
   { path: 'articles/:id', pathMatch: 'full', component: ArticlesDetailsComponent },
    { path: 'models', pathMatch: 'full', component: ModelsComponent },
   
  { path: '**', redirectTo: 'not-found' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
