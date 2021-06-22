import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './SUPRH/main-page/main-page.component';
import { PaieAppComponent } from './SUPRH/Paie/paie-app/paie-app.component';


import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "suprh",
        pathMatch: "full"
      },
      {
        path: "suprh",
        component: MainPageComponent,
      },
      {
        path: "paie",
        component: PaieAppComponent,
        loadChildren: () => import("./SUPRH/Paie/paie-module/paie-module.module").then( m => m.PaieModuleModule )
      },
    ]
  }
];

@NgModule({
  declarations:[

    AppComponent,
    MainPageComponent,
    PaieAppComponent,


  ],
  imports: [
    MatButtonModule,
    RouterModule.forRoot(routes),

    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    PerfectScrollbarModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
