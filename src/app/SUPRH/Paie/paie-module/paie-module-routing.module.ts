import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaieCodificationComponent } from '../paie-codification/paie-codification.component';
import { PaieCongesComponent } from '../paie-conges/paie-conges.component';
import { PaieEmployesComponent } from '../paie-employes/paie-employes.component';
import { PaiePageComponent } from '../paie-page/paie-page.component';
import { PaieParamsComponent } from '../paie-params/paie-params.component';
import { PaieUtilisateursComponent } from '../paie-utilisateurs/paie-utilisateurs.component';
import { UserCardComponent } from '../user-card/user-card.component';

import { MatTableModule } from "@angular/material/table";

import { CommonModule } from '@angular/common';
import { UserRowComponent } from '../user-row/user-row.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "codification",
    pathMatch: 'full',
  },
  {
    path: "codification",
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
    UserRowComponent,
    UserCardComponent,
    PaieCodificationComponent,
    PaieCongesComponent,
    PaieEmployesComponent,
    PaiePageComponent,
    PaieUtilisateursComponent,
    PaieParamsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
  ],
  exports: [RouterModule]
})
export class PaieModuleRoutingModule { }
