import { InMemoryDataService } from './Services/In-Memory/in-memory-data.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './SUPRH/main-page/main-page.component';
import { PaieAppComponent } from './SUPRH/Paie/paie-app/paie-app.component';


import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SidenavComponent } from './SUPRH/Paie/sidenav/sidenav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './Services/Guards/Auth-Guard/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { GuestGuardService } from './Services/Guards/Guest-Guard/guest-guard.service';
import { AccessGuardService } from './Services/Guards/Access-Guest/access-guard.service';
import { FormsModule } from '@angular/forms';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthService } from './Services/Auth/auth.service';
import { SidenavItemComponent } from './SUPRH/Paie/sidenav/sidenav-item/sidenav-item.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "paie",
        pathMatch: 'full'
      },
      {
        path: "paie",
        canActivate: [AccessGuardService],
        component: PaieAppComponent,
        loadChildren: () => import("./SUPRH/Paie/paie-module/paie-module.module").then( m => m.PaieModuleModule )
      },
      {
        path: "connexion",
        canActivate: [GuestGuardService],
        component: LoginComponent,
      },
      {
        path: "access-denied",
        canActivate: [AuthGuardService],
        component: AccessDeniedComponent,
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ]
  },

];

@NgModule({
  declarations:[
    SidenavItemComponent,
    SidenavComponent,
    AppComponent,
    MainPageComponent,
    PaieAppComponent,
    NotFoundComponent,
    LoginComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    PerfectScrollbarModule,

    
    RouterModule.forRoot( routes, { useHash: true, onSameUrlNavigation: 'reload' }),

  ],
  exports: [RouterModule],
  providers: [AccessGuardService, AuthService, AuthGuardService, GuestGuardService, ]
})

export class AppRoutingModule { }
