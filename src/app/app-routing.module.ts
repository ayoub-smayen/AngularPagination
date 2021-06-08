import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { DashboardPageComponent } from './pages/dashboard/containers'
import { NotFoundComponent } from './pages/not-found/not-found.component'

import { CategoryPageComponent } from './pages/Product-categories/category-page/category-page.component'

import { AdminGuard, AuthGuard, ManagerGuard } from './pages/auth/guards'

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent,
  },

  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/notification/notification.module').then(
        (m) => m.NotificationModule,
      ),
  },
  {
    path: 'deliveryman',
    pathMatch: 'full',

    loadChildren: () =>
      import('./pages/deliveryman/deliveryman.module').then(
        (m) => m.DeliverymanModule,
      ),
  },

  {
    path: 'category',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/Product-categories/category.module').then(
        (m) => m.CategoryModule,
      ),
  },
  {
    path: 'rays',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/ray/ray.module').then((m) => m.RayModule),
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/add-product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'publicity',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/publicity/publicity.module').then(
        (m) => m.PublicityModule,
      ),
  },

  {
    path: 'calender',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/calender/calenderr.module').then(
        (m) => m.CalenderrModule,
      ),
  },

  {
    path: 'users',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'claim',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/claim/claim.module').then((m) => m.ClaimModule),
  },

  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '**',
    redirectTo: '404',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
