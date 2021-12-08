import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { GifsPageComponent } from './components/gifs/gifs-page/gifs-page.component';
import { ColoresComponent } from './components/colores/colores.component';

const routes: Routes = [
 
  {path: 'demo', component:GifsPageComponent},
  {path: 'color', component:ColoresComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]

})
export class AppRoutingModule { }
