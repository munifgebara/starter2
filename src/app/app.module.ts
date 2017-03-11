import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrincipalService } from './principal/principal.service';
import { PrincipalComponent} from './principal/principal.component';
import { ListaComponent } from './lista/lista.component';
import {FormularioComponent} from './formulario/formulario.component'



@NgModule({
  imports: [BrowserModule, FormsModule, routing,HttpModule,JsonpModule],
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListaComponent,
    FormularioComponent
  ],
  providers: [
    PrincipalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
