import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

const registerRoutes: Routes = [
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },

];

export const registerRouting = RouterModule.forChild(registerRoutes);
