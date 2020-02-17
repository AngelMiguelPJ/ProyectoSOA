import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pelis', loadChildren: './pages/pelis/pelis.module#PelisPageModule',
      canActivate: [AuthGuard]},

  { path: 'peli/:id', loadChildren: './pages/peli-details/peli-details.module#PeliDetailsPageModule',
      canActivate: [AuthGuard]},

  { path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)},

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule',
   canActivate: [AuthGuard]},
  
  { path: 'reset', loadChildren: () => import('./pages/reset/reset.module').then( m => m.ResetPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }