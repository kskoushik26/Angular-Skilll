import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'login',loadChildren: './login-page/login-page.module#LoginPageModule'},
  { path: 'home',loadChildren: './home/home.module#HomeModule'},
  {path:"**",loadChildren: './login-page/login-page.module#LoginPageModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
