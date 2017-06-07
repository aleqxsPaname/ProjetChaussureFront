import { Routes, RouterModule } from '@angular/router';

import { ArticlesDetailsComponent } from './articles.component';

const articlesRoutes: Routes = [
  { path: 'articles', component:  ArticlesDetailsComponent, pathMatch: 'full' },
  
];

export const articlesRouting = RouterModule.forChild(articlesRoutes);
