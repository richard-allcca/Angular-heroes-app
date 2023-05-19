import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';


const router: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module')
      .then(m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
