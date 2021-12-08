import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { ColoresComponent } from './components/colores/colores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsModule } from './components/gifs/gifs.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ColoresComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GifsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
