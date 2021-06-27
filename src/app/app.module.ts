import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RetenuPageComponent } from './SUPRH/Paie/retenu-page/retenu-page.component';
import { AdministrationPageComponent } from './SUPRH/Paie/administration-page/administration-page.component';
import { GestionProfilsComponent } from './SUPRH/Paie/administration-page/gestion-profils/gestion-profils.component';
import { GestionPermissionsComponent } from './SUPRH/Paie/administration-page/gestion-permissions/gestion-permissions.component';
import { AvancesComponent } from './SUPRH/Paie/retenu-page/avances/avances.component';
import { AcomptesComponent } from './SUPRH/Paie/retenu-page/acomptes/acomptes.component';

@NgModule({
  declarations: [
  
    AvancesComponent,
       AcomptesComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
