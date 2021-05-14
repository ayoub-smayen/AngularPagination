import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AyoubdashboardComponent } from './ayoubadmin/ayoubdashboard/ayoubdashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { DefaultComponent } from './layouts/default/default.component';


const routes: Routes = [

  
{
    path: 'adminayoub',
    canActivate: [AdminGuard],
    component: DefaultComponent,
    children: [{
      path: '',
      component: AyoubdashboardComponent
    },

  //  { path: '',   redirectTo: '/adminayoub', pathMatch: 'full' },

]

  }

  
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
