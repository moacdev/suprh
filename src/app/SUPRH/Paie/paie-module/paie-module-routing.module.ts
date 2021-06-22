import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaieCodificationComponent } from '../paie-codification/paie-codification.component';
import { PaieCongesComponent } from '../paie-conges/paie-conges.component';
import { PaieEmployesComponent } from '../paie-employes/paie-employes.component';
import { PaiePageComponent } from '../paie-page/paie-page.component';
import { PaieParamsComponent } from '../paie-params/paie-params.component';
import { PaieUtilisateursComponent } from '../paie-utilisateurs/paie-utilisateurs.component';

const routes: Routes = [
  {
    path: '',
    component: PaieCodificationComponent
  },
  {
    path: 'gestion-conges',
    component: PaieCongesComponent
  },
  {
    path: 'employes',
    component: PaieEmployesComponent
  },
  {
    path: 'paie',
    component: PaiePageComponent
  },
  {
    path: 'administration',
    component: PaieUtilisateursComponent
  },
  {
    path: 'parametres',
    component: PaieParamsComponent
  },
];

@NgModule({
  declarations: [
    PaieCodificationComponent,
    PaieCongesComponent,
    PaieEmployesComponent,
    PaiePageComponent,
    PaieUtilisateursComponent,
    PaieParamsComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaieModuleRoutingModule { }
