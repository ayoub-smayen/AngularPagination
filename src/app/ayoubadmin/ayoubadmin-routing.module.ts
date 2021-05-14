import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { DefaultComponent } from '../layouts/default/default.component';
import { AyoubdashboardComponent } from './ayoubdashboard/ayoubdashboard.component';
import { SharedComponent } from './shared/shared.component';


const routes: Routes = [
 /* {
    path: 'adminayoub',
    canActivate: [AdminGuard],
    component: DefaultComponent,
    children: [{
      path: '',
      component: AyoubdashboardComponent
    },

    { path: '',   redirectTo: '/adminayoub', pathMatch: 'full' },

]

  }*/


  {
    path:
      'ayub',canActivate:[AdminGuard],component:AyoubdashboardComponent
    
  },
  {
  path:
  'shared',canActivate:[AdminGuard],component:SharedComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyoubadminRoutingModule { }
