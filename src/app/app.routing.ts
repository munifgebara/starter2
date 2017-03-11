import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

export const routing = RouterModule.forRoot([
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  }
]);
