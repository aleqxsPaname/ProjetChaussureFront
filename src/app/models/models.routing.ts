import { Routes, RouterModule } from '@angular/router';

import { ModelsComponent } from './models.component';

const modelsRoutes: Routes = [
  { path: 'home', component:  ModelsComponent, pathMatch: 'full' },
  // { path: 'models/hommes', component:  },
 // { path: 'models/femmes', component:  },
  // { path: 'models/kids', component:  }
];

export const modelsRouting = RouterModule.forChild(modelsRoutes);
