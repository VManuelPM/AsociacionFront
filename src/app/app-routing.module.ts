import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personas',
    pathMatch: 'full'
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },
  {
    path: 'personas',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
