import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuserComponent } from './euser/euser.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
{path:"",redirectTo:"euser",pathMatch:"full"},
{path:"euser",component:EuserComponent},
{path:"search",component:SearchComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
