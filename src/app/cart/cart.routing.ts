import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';

const cartRoutes: Routes = [
  { path: 'cart', component:  CartComponent, pathMatch: 'full' },
  
];

export const cartRouting = RouterModule.forChild(cartRoutes);
