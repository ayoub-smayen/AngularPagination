import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { WelcomeComponent } from './welcome/welcome.component';
import { OpollComponent } from './opoll/opoll.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MypollsComponent } from './mypolls/mypolls.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsersComponent } from '../admin1/users/users.component';
import { AdminGuard } from '../guards/admin.guard';
import { AddpollComponent } from './addpoll/addpoll.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/welcome', pathMatch: 'full' },

  { path: 'poll', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'my-polls', canActivate: [AuthGuard], component: MypollsComponent },
  { path: 'add-poll', canActivate: [AuthGuard], component: AddpollComponent },
  { path: 'poll/:id', component: OpollComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', canActivate: [AdminGuard], component: UsersComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
