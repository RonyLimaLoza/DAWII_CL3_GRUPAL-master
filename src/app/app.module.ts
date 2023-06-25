import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './soluciones/home/home.component';
import { MaterialModule } from './angular-material/material.module';
import { RouterModule } from '@angular/router';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { PromedioComponent } from './soluciones/promedio/promedio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolucionesComponent,
    PromedioComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'soluciones', component: SolucionesComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: 'promedio', component:PromedioComponent}]
      
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
