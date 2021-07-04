import { NotAccessDialogComponent } from './../not-access-dialog/not-access-dialog.component';
import { GradesService } from './../../../Services/Models/Codification/Grades/grades.service';
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
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatStepperModule } from "@angular/material/stepper";

import { CommonModule } from '@angular/common';
import { UserRowComponent } from '../user-row/user-row.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { DepartementComponent } from '../paie-codification/departement/departement.component';
import { DirectionComponent } from '../paie-codification/direction/direction.component';
import { IndemnitesComponent } from '../paie-codification/indemnites/indemnites.component';
import { EchelonComponent } from '../paie-codification/echelon/echelon.component';
import { CategoriesComponent } from '../paie-codification/categories/categories.component';
import { FonctionsComponent } from '../paie-codification/fonctions/fonctions.component';
import { GradesComponent } from '../paie-codification/grades/grades.component';
import { RetenuPageComponent } from '../retenu-page/retenu-page.component';
import { AdministrationPageComponent } from '../administration-page/administration-page.component';
import { GestionPermissionsComponent } from '../administration-page/gestion-permissions/gestion-permissions.component';
import { GestionProfilsComponent } from '../administration-page/gestion-profils/gestion-profils.component';
import { AcomptesComponent } from '../retenu-page/acomptes/acomptes.component';
import { AvancesComponent } from '../retenu-page/avances/avances.component';
import { ServiceComponent } from '../paie-codification/service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/Services/In-Memory/in-memory-data.service';
import { FonctionsService } from 'src/app/Services/Models/Codification/Fonctions/fonctions.service';
import { IndemnitesService } from 'src/app/Services/Models/Codification/Indemnites/indemnites.service';
import { CategoriesService } from 'src/app/Services/Models/Codification/Categories/categories.service';
import { DepartementsService } from 'src/app/Services/Models/Codification/Departements/departements.service';
import { EchelonsService } from 'src/app/Services/Models/Codification/Echelons/echelons.service';
import { DirectionsService } from 'src/app/Services/Models/Codification/Directions/directions.service';
import { ServicesService } from 'src/app/Services/Models/Codification/Services/services.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: "codification",
    pathMatch: 'full',
  },
  {
    path: '/api/users',
    component: InMemoryDataService
  },
  {
    path: "codification",
    component: PaieCodificationComponent
  },
  {
    path: "codification/grades",
    component: GradesComponent,
  },
  {
    path: "codification/fonctions",
    component: FonctionsComponent,
  },
  {
    path: "codification/categories",
    component: CategoriesComponent,
  },
  {
    path: "codification/echelon",
    component: EchelonComponent,
  },
  {
    path: "codification/indemnités",
    component: IndemnitesComponent,
  },
  {
    path: "codification/direction",
    component: DirectionComponent,
  },
  {
    path: "codification/services",
    component: ServiceComponent,
  },
  {
    path: "codification/departement",
    component: DepartementComponent,
  },
  {
    path: 'conges-absences',
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
    path: 'retenu',
    component: RetenuPageComponent
  },
  {
    path: 'retenu/avances',
    component: AvancesComponent,
  },
  {
    path: 'retenu/acomptes',
    component: AcomptesComponent,
  },
  {
    path: 'administration',
    component: AdministrationPageComponent
  },
  {
    path: 'administration/gestion-utilisateurs',
    component: PaieUtilisateursComponent
  },
  {
    path: 'administration/gestion-profils',
    component: GestionProfilsComponent
  },
  {
    path: 'administration/gestion-permissions',
    component: GestionPermissionsComponent
  },
  {
    path: 'parametres',
    component: PaieParamsComponent
  },
];

@NgModule({
  declarations: [
    ServiceComponent,
    RetenuPageComponent,
    AdministrationPageComponent,
    GestionProfilsComponent,
    GestionPermissionsComponent,
    GradesComponent,
    FonctionsComponent,
    CategoriesComponent,
    EchelonComponent,
    IndemnitesComponent,
    DirectionComponent,
    DepartementComponent,
    UserRowComponent,
    UserCardComponent,
    PaieCodificationComponent,
    PaieCongesComponent,
    PaieEmployesComponent,
    PaiePageComponent,
    PaieUtilisateursComponent,
    PaieParamsComponent,
    NotAccessDialogComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { delay: 1000 }),
    MatStepperModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    GradesService,
    FonctionsService,
    CategoriesService,
    IndemnitesService,
    InMemoryDataService,
    DepartementsService,
    EchelonsService,
    DirectionsService,
    ServicesService
  ],
  exports: [RouterModule]
})
export class PaieModuleRoutingModule { }
