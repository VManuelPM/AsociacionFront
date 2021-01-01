import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personas',
    pathMatch: 'full'
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'personas',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'agregar',
    component: FormularioComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
