import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/login/auth.guard';


const routes: Routes = [
  // Redirect to the auth module by default
  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // Load the auth module and its child routes
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  // Home route with AuthGuard (requires authentication)
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'home/about',
    loadChildren: () =>
      import('./home/about/about/about.component').then((m) => m.AboutComponent)
  },
  // Handle any other routes or 404 here
  // { path: '**', redirectTo: 'auth' },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
