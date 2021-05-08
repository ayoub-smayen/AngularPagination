import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RayonComponent } from './rayon/rayon.component';

const routes: Routes = [
  {path:"ray/:id",component:RayonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
